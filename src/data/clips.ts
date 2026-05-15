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
  // Add clips here. Each clip needs one of: youtubeId, iframeUrl, or src.
  //
  // Local file example (drop the file in public/clips/):
  // {
  //   id: 'restaurant',
  //   title: "Bob's Steak & Chop House",
  //   description: 'Dalton remains composed while staff escalate.',
  //   src: '/clips/restaurant.mp4',
  //   poster: '/clips/restaurant.jpg',
  // },
  //
  // YouTube example:
  // {
  //   id: 'courthouse',
  //   title: 'Outside the courthouse',
  //   youtubeId: 'dQw4w9WgXcQ',
  // },
]
