import React, { FC } from 'react'
import { EmbeddedContent } from '../../../types/EmbeddedContent'
import FlickrItem from './FlickrItem'
import VimeoItem from "./VimeoItem";

type BookmarkItemProps = {
  bookmark: EmbeddedContent
}

const BookmarkItem: FC<BookmarkItemProps> = ({ bookmark }) =>
  'flickr_type' in bookmark ? (
    <FlickrItem bookmark={bookmark} />
  ) : (
    <VimeoItem bookmark={bookmark} />
  )

export default BookmarkItem
