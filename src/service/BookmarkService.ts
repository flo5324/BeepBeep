import { EmbeddedContent } from '../types/EmbeddedContent'

export const checkUrl = (url: string): Promise<EmbeddedContent> => {
  return fetch('https://noembed.com/embed?url=' + url)
    .then((response) => response.json())
}
