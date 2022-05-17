import React, { useContext } from 'react'
import { BookmarkContext } from '../../context/BookmarkContext'
import BookmarkItem from './components/BookmarkItem'

const BookmarkList = () => {
  const { bookmarks } = useContext(BookmarkContext)!

  const renderBookmarkList = () => {
    if (bookmarks.length === 0) {
      return <i>Aucun bookmark</i>
    }

    return bookmarks.map((b) => (
      <BookmarkItem bookmark={b} key={b.url + b.addedDate.getTime()} />
    ))
  }

  return (
    <div>
      <h2>Liste</h2>
      {renderBookmarkList()}
    </div>
  )
}

export default BookmarkList
