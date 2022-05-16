import React, { FC } from 'react'
import { FlickrContent } from '../../../types/EmbeddedContent'

type BookmarkItemProps = {
  bookmark: FlickrContent
}

const FlickrItem: FC<BookmarkItemProps> = ({ bookmark }) => {
  return (
    <div className={'listItem'}>
      <h3>{bookmark.url}</h3>
    </div>
  )
}

export default FlickrItem
