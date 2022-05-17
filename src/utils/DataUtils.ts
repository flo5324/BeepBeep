export const formatUploadDate = (date: string) => {
  return Intl.DateTimeFormat('fr', { dateStyle: 'long' }).format(new Date(date))
}

export const formatDuration = (duration: number) => {
  let seconds = Math.floor(duration % 60)
  let minutes = Math.floor((duration / 60) % 60)
  let hours = Math.floor((duration / (60 * 60)) % 24)

  let hoursString = hours < 10 ? '0' + hours : hours
  let minutesString = minutes < 10 ? '0' + minutes : minutes
  let secondsString = seconds < 10 ? '0' + seconds : seconds

  return hoursString + ':' + minutesString + ':' + secondsString
}

export const formatElapsedTime = (timeDiff: number) => {
  const rtf1 = new Intl.RelativeTimeFormat('fr', { style: 'long' })

  if (timeDiff / 3600 <= -1)
    return rtf1.format(Math.floor(timeDiff / 3600), 'hours')
  if (timeDiff / 60 <= -1)
    return rtf1.format(Math.floor(timeDiff / 60), 'minute')
  return rtf1.format(timeDiff, 'seconds')
}
