interface CommonAttribute {
  title: string
  url: string
  provider_name: string
  provider_url: string
  thumbnail_url: string
  thumbnail_height: number
  thumbnail_width: number
  author_name: string
  author_url: string
  height: number
  width: number
  type: string
  version: string
  html: string
  addedDate: Date
}

export type VimeoContent = CommonAttribute & {
  account_type: string
  thumbnail_url_with_play_button: string
  uri: string
  upload_date: string
  video_id: number
  is_plus: string
  description: string
  duration: number
}

export type FlickrContent = CommonAttribute & {
  flickr_type: string
  media_url: string
  license_id: string
  cache_age: number
  web_page_short_url: string
  license_url: string
  license: string
  web_page: string
}

export type EmbeddedContent = VimeoContent | FlickrContent
