import { clips, type Clip } from '../data/clips'

export default function Clips() {
  return (
    <article className="page">
      <section className="story-intro">
        <h2 className="page-title">Isn't he a racist?</h2>
        <p>
          No. People have called Dalton every name in the book, most of it on his own
          livestream, while he stayed calm. He has been screamed at, threatened, and
          assaulted on camera. He has not returned a single insult.
        </p>
        <p>
          Watch the clips and decide for yourself.
        </p>
      </section>

      {clips.length === 0 ? (
        <p className="muted-note">Clips coming soon.</p>
      ) : (
        <div className="clip-list">
          {clips.map((clip) => (
            <ClipCard key={clip.id} clip={clip} />
          ))}
        </div>
      )}
    </article>
  )
}

function ClipCard({ clip }: { clip: Clip }) {
  const embedSrc = clip.youtubeId
    ? `https://www.youtube.com/embed/${clip.youtubeId}`
    : clip.iframeUrl

  return (
    <div className="carousel-card">
      {clip.src ? (
        <div className="carousel-card-media">
          <video
            src={clip.src}
            poster={clip.poster}
            controls
            playsInline
            preload="metadata"
          />
        </div>
      ) : embedSrc ? (
        <div className="carousel-card-media">
          <iframe
            src={embedSrc}
            title={clip.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : null}
      <h3 className="carousel-card-title">{clip.title}</h3>
      {clip.description && <p className="carousel-card-desc">{clip.description}</p>}
    </div>
  )
}
