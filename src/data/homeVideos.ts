export type HomeVideo = {
  id: string
  title: string
  description: string
  src: string
}

export const homeVideos: HomeVideo[] = [
  {
    id: 'crosswalk',
    title: 'Crosswalk encounter',
    description: 'One of the public encounters supporters point to when explaining how Dalton documented his life.',
    src: '/clips/crosswalk.mp4',
  },
  {
    id: 'hoodie',
    title: 'Hoodie encounter',
    description: "A clip showing the kind of street-level interactions that became part of Dalton's livestream record.",
    src: '/clips/hoodie.mp4',
  },
]
