import React, { FC, useEffect, useState } from 'react'
import { FlickrContent, VimeoContent } from '../../../types/EmbeddedContent'
import {
  formatDuration,
  formatUploadDate,
  formatElapsedTime,
} from '../../../utils/DataUtils'

type BookmarkItemProps = {
  bookmark: VimeoContent
}

const VimeoItem: FC<BookmarkItemProps> = ({ bookmark }) => {
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

  return (
    <div className={'listItem'}>
      <h3>{bookmark.title}</h3>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img src={bookmark.thumbnail_url_with_play_button} />
        <div style={{ marginLeft: 20 }}>
          <p>{bookmark.author_name}</p>
          <p>{formatDuration(bookmark.duration)}</p>
          <p>Publiée le {formatUploadDate(bookmark.upload_date)}</p>
          <p>Ajoutée {formatElapsedTime(elapsedTime)}</p>
          <i>{bookmark.url}</i>
        </div>
      </div>
    </div>
  )
}

export default VimeoItem
