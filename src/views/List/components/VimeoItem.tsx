import React, { FC, useEffect, useState } from 'react'
import { FlickrContent, VimeoContent } from '../../../types/EmbeddedContent'
import {
  formatDuration,
  formatUploadDate,
  formatElapsedTime,
} from '../../../utils/DataUtils'

type BookmarkItemProps = {
  bookmark: VimeoContent
  elapsedTime: number
}

const VimeoItem: FC<BookmarkItemProps> = ({ bookmark, elapsedTime }) => {
  return (
    <>
      <img
        style={{ cursor: 'pointer' }}
        src={bookmark.thumbnail_url_with_play_button}
        onClick={() => window.open(bookmark.url, '_blank')}
      />
      <div style={{ marginLeft: 20 }}>
        <p>{bookmark.author_name}</p>
        <p>{formatDuration(bookmark.duration)}</p>
        <p>Publiée le {formatUploadDate(bookmark.upload_date)}</p>
        <p>Ajoutée {formatElapsedTime(elapsedTime)}</p>
        <i>{bookmark.url}</i>
      </div>
    </>
  )
}

export default VimeoItem
