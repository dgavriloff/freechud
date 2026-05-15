import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { clips, type Clip } from '../data/clips'

export default function Clips() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = (index: number) => {
    const el = carouselRef.current
    if (!el) return
    const clamped = Math.max(0, Math.min(clips.length - 1, index))
    const card = el.querySelectorAll<HTMLElement>('.carousel-card')[clamped]
    if (!card) return
    el.scrollTo({ left: card.offsetLeft, behavior: 'smooth' })
  }

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const cards = el.querySelectorAll<HTMLElement>('.carousel-card')
        const center = el.scrollLeft + el.clientWidth / 2
        let best = 0
        let bestDist = Infinity
        cards.forEach((c, i) => {
          const cardCenter = c.offsetLeft + c.offsetWidth / 2
          const d = Math.abs(cardCenter - center)
          if (d < bestDist) {
            bestDist = d
            best = i
          }
        })
        setActiveIndex(best)
      })
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      el.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <article className="page">
      <p className="page-back">
        <Link to="/">&larr; Back</Link>
      </p>

      <section className="story-intro">
        <h2 className="page-title">Isn't he a racist?</h2>
        <p>
          Short answer: no. People have called him every name in the book, most of them on
          camera, while he stayed calm. Watch the clips and judge for yourself.
        </p>
      </section>

      {clips.length === 0 ? (
        <p className="muted-note">Clips coming soon.</p>
      ) : (
        <>
          <div className="carousel-wrapper">
            <div className="carousel" ref={carouselRef}>
              {clips.map((clip) => (
                <ClipCard key={clip.id} clip={clip} />
              ))}
            </div>
          </div>
          {clips.length > 1 && (
            <div className="carousel-controls">
              <button
                type="button"
                className="carousel-nav"
                aria-label="Previous clip"
                onClick={() => scrollToIndex(activeIndex - 1)}
                disabled={activeIndex === 0}
              >
                &lsaquo;
              </button>
              <div className="carousel-indicators">
                {clips.map((clip, i) => (
                  <button
                    key={clip.id}
                    type="button"
                    className={`carousel-dot${i === activeIndex ? ' is-active' : ''}`}
                    aria-label={`Go to clip ${i + 1}`}
                    onClick={() => scrollToIndex(i)}
                  />
                ))}
              </div>
              <button
                type="button"
                className="carousel-nav"
                aria-label="Next clip"
                onClick={() => scrollToIndex(activeIndex + 1)}
                disabled={activeIndex === clips.length - 1}
              >
                &rsaquo;
              </button>
            </div>
          )}
        </>
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
      <div className="carousel-card-media">
        {clip.src ? (
          <video src={clip.src} poster={clip.poster} controls preload="metadata" />
        ) : embedSrc ? (
          <iframe
            src={embedSrc}
            title={clip.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : null}
      </div>
      <h3 className="carousel-card-title">{clip.title}</h3>
      {clip.description && <p className="carousel-card-desc">{clip.description}</p>}
    </div>
  )
}
