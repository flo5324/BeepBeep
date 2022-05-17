import React, { FC, useContext, useEffect, useState } from "react";
import { EmbeddedContent } from '../../../types/EmbeddedContent'
import FlickrItem from './FlickrItem'
import VimeoItem from './VimeoItem'
import { BookmarkContext } from "../../../context/BookmarkContext";

type BookmarkItemProps = {
  bookmark: EmbeddedContent
}

const BookmarkItem: FC<BookmarkItemProps> = ({ bookmark }) => {
  const { deleteBookmark } = useContext(BookmarkContext)!

  const [elapsedTime, setElapsedTime] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(
        Math.floor(
          (new Date(bookmark.addedDate).getTime() - Date.now()) / 1000,
        ),
      )
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const getContent = () => {
    if ('flickr_type' in bookmark)
      return <FlickrItem bookmark={bookmark} elapsedTime={elapsedTime} />
    else return <VimeoItem bookmark={bookmark} elapsedTime={elapsedTime} />
  }

  return (
    <div className={'listItem'}>
      <h3>{bookmark.title}</h3>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
          {getContent()}
        </div>
        <button onClick={() => deleteBookmark(bookmark)}>Supprimer</button>
      </div>
    </div>
  )
}

export default BookmarkItem
