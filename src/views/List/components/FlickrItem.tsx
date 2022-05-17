import React, { FC } from 'react'
import { FlickrContent } from '../../../types/EmbeddedContent'
import { formatElapsedTime } from '../../../utils/DataUtils'

type BookmarkItemProps = {
  bookmark: FlickrContent
  elapsedTime: number
}

const FlickrItem: FC<BookmarkItemProps> = ({ bookmark, elapsedTime }) => {
  return (
    <>
      <img
        style={{ cursor: 'pointer' }}
        src={bookmark.thumbnail_url}
        onClick={() => window.open(bookmark.url, '_blank')}
      />
      <div style={{ marginLeft: 20 }}>
        <p>{bookmark.author_name}</p>
        <p>
          {bookmark.width}x{bookmark.height}
        </p>
        <p>Ajoutée {formatElapsedTime(elapsedTime)}</p>
        <i>{bookmark.url}</i>
      </div>
    </>
  )
}

export default FlickrItem
