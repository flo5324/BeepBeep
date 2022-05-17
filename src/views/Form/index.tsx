import React, { FormEvent, useContext, useState } from 'react'
import { checkUrl } from '../../service/BookmarkService'
import { BookmarkContext } from '../../context/BookmarkContext'

const BookmarkForm = () => {
  const { addBookmark } = useContext(BookmarkContext)!
  const [link, setLink] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  const onLinkChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setLink(e.currentTarget.value)
  }

  const submitLink = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    checkUrl(link)
      .then((res) => {
        addBookmark(res)
        setLink('')
      })
      .catch((err) => setError(err.error))
      .finally(() => setLoading(false))
  }

  if (isLoading) return <p>Chargement</p>

  return (
    <>
      <form onSubmit={submitLink}>
        <h2>Nouveau bookmark</h2>
        <input
          type="url"
          style={{ marginRight: 10 }}
          placeholder={'Url'}
          value={link}
          onChange={onLinkChange}
        />
        <button type={'submit'} disabled={!link}>Envoyer</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  )
}

export default BookmarkForm
