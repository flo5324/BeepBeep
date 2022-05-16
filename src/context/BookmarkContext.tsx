import { createContext, FC, PropsWithChildren, useState } from 'react'
import { EmbeddedContent } from '../types/EmbeddedContent'

type BookmarkContextType = {
  bookmarks?: EmbeddedContent[]
  addBookmark: (bookmarks: EmbeddedContent) => void
}

export const BookmarkContext = createContext<BookmarkContextType | undefined>(
  undefined,
)

export const BookmarkContextProvider: FC<PropsWithChildren<any>> = ({
  children,
}) => {
  const [bookmarks, setBookmarks] = useState<EmbeddedContent[]>()

  const addBookmark = (newBookmark: EmbeddedContent) => {
    setBookmarks([
      ...(bookmarks ?? []),
      { ...newBookmark, addedDate: new Date() },
    ])
  }

  const value = { bookmarks, addBookmark }

  return (
    <BookmarkContext.Provider value={value}>
      {children}
    </BookmarkContext.Provider>
  )
}
