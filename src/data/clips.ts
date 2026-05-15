export type Clip = {
  id: string
  title: string
  description?: string
  youtubeId?: string
  iframeUrl?: string
}

export const clips: Clip[] = [
  // Add clips here. Each clip needs either a `youtubeId` or an `iframeUrl`.
  // Example:
  // {
  //   id: 'restaurant',
  //   title: 'Bob\'s Steak & Chop House',
  //   description: 'Dalton remains composed while staff escalate.',
  //   youtubeId: 'dQw4w9WgXcQ',
  // },
]
