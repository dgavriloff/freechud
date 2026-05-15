export type Clip = {
  id: string
  title: string
  description?: string
  /** YouTube video ID, e.g. 'dQw4w9WgXcQ' */
  youtubeId?: string
  /** Any embeddable iframe URL (Twitter, Rumble, etc.) */
  iframeUrl?: string
  /** Path to a local video file in /public, e.g. '/clips/restaurant.mp4' */
  src?: string
  /** Optional poster image path for local videos */
  poster?: string
}

export const clips: Clip[] = [
  {
    id: 'crosswalk',
    title: 'Crosswalk',
    src: '/clips/crosswalk.mp4',
  },
  {
    id: 'hoodie',
    title: 'Hoodie',
    src: '/clips/hoodie.mp4',
  },
]
