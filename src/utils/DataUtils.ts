export const formatUploadDate = (date: string) => {
  return Intl.DateTimeFormat(undefined, { dateStyle: 'long' }).format(
    new Date(date),
  )
}

export const formatDuration = (duration: number) => {
  const date = new Date(0)
  date.setSeconds(duration)
  return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1')
}

export const formatElapsedTime = (timeDiff: number) => {
  const rtf1 = new Intl.RelativeTimeFormat('fr', { style: 'long' })

  console.log(timeDiff / 3600, timeDiff / 60)

  if (timeDiff / 3600 <= -1) return rtf1.format(Math.floor(timeDiff / 3600), 'hours')
  if (timeDiff / 60 <= -1) return rtf1.format(Math.floor(timeDiff / 60), 'minute')
  return rtf1.format(timeDiff, 'seconds')
}
