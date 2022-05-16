import React, { FormEvent, useContext, useState } from 'react'
import { checkUrl } from '../../service/BookmarkService'
import { BookmarkContext } from '../../context/BookmarkContext'

const BookmarkForm = () => {
  const { addBookmark } = useContext(BookmarkContext)!
  const [link, setLink] = useState('')
  const [isLoading, setLoading] = useState(false)

  const onLinkChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setLink(e.currentTarget.value)
  }

  const submitLink = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    checkUrl(link)
      .then((res) => addBookmark(res))
      .finally(() => setLoading(false))
  }

  if (isLoading) return <p>Chargement</p>

  return (
    <form onSubmit={submitLink}>
      <h2>Nouveau bookmark</h2>
      <button
        type={'button'}
        onClick={() => {
          checkUrl('https://www.flickr.com/photos/feuilllu/45771361701/').then((res) => addBookmark(res))
        }}
      >
        quick add image
      </button>
      <button
        type={'button'}
        onClick={() => {
          checkUrl('https://vimeo.com/565486457').then((res) => addBookmark(res))
        }}
      >
        quick add video
      </button>
      <label>
        Url :
        <input type="url" value={link} onChange={onLinkChange} />
      </label>
      <button type={'submit'}>Envoyer</button>
    </form>
  )
}

export default BookmarkForm
