import { createContext, FC, PropsWithChildren, useState } from 'react'
import { EmbeddedContent } from '../types/EmbeddedContent'

type BookmarkContextType = {
  bookmarks: EmbeddedContent[]
  addBookmark: (bookmarks: EmbeddedContent) => void
  deleteBookmark: (bookmark: EmbeddedContent) => void
}

export const BookmarkContext = createContext<BookmarkContextType | undefined>(
  undefined,
)

export const BookmarkContextProvider: FC<PropsWithChildren<any>> = ({
  children,
}) => {
  const [bookmarks, setBookmarks] = useState<EmbeddedContent[]>([])

  const addBookmark = (newBookmark: EmbeddedContent) => {
    setBookmarks([...bookmarks, { ...newBookmark, addedDate: new Date() }])
  }

  const deleteBookmark = (bookmark: EmbeddedContent) => {
    setBookmarks(
      bookmarks.filter(
        (b) => !(b.url == bookmark.url && b.addedDate == bookmark.addedDate),
      ),
    )
  }

  const value = { bookmarks, addBookmark, deleteBookmark }

  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  )
}
