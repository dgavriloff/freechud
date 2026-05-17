import { useEffect, useRef } from 'react'

export default function Story() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const items = Array.from(root.querySelectorAll<HTMLElement>('.timeline-event'))
    if (items.length === 0) return
    const scrollContainer = root.closest<HTMLElement>('.site-scroll')

    let raf = 0
    const update = () => {
      raf = 0
      const containerRect = root.getBoundingClientRect()
      const firstRect = items[0].getBoundingClientRect()
      const lastRect = items[items.length - 1].getBoundingClientRect()
      const scrollerRect = scrollContainer?.getBoundingClientRect()
      const timelineStyles = getComputedStyle(root)
      const dotOffset =
        Number.parseFloat(timelineStyles.getPropertyValue('--dot-offset')) || 0
      const dotSize =
        Number.parseFloat(timelineStyles.getPropertyValue('--dot-size')) || 0
      const dotRadius = dotSize / 2

      const top = firstRect.top - containerRect.top + dotOffset + dotRadius
      const bottom = lastRect.top - containerRect.top + dotOffset - dotRadius
      const lineHeight = Math.max(0, bottom - top)
      root.style.setProperty('--line-top', `${top}px`)
      root.style.setProperty('--line-height', `${lineHeight}px`)

      const doc = document.documentElement
      const scrollTop = scrollContainer ? scrollContainer.scrollTop : window.scrollY
      const viewportHeight = scrollContainer ? scrollContainer.clientHeight : window.innerHeight
      const scrollHeight = scrollContainer ? scrollContainer.scrollHeight : doc.scrollHeight
      const viewportAnchor = scrollContainer && scrollerRect
        ? scrollerRect.top + viewportHeight * 0.35
        : viewportHeight * 0.35
      const firstCenterAbs = scrollContainer && scrollerRect
        ? firstRect.top - scrollerRect.top + scrollContainer.scrollTop + dotOffset
        : firstRect.top + dotOffset + window.scrollY
      const halfVh = viewportHeight / 2
      const startScroll = firstCenterAbs - halfVh
      const endScroll = scrollHeight - viewportHeight
      const span = endScroll - startScroll
      const ratio =
        span > 0 ? Math.max(0, Math.min(1, (scrollTop - startScroll) / span)) : 0
      root.style.setProperty('--line-progress', `${lineHeight * ratio}px`)

      const activeIndex = items.reduce((closestIndex, item, index) => {
        const rect = item.getBoundingClientRect()
        const dotCenter = rect.top + dotOffset
        const closestRect = items[closestIndex].getBoundingClientRect()
        const closestCenter = closestRect.top + dotOffset

        return Math.abs(dotCenter - viewportAnchor) < Math.abs(closestCenter - viewportAnchor)
          ? index
          : closestIndex
      }, 0)

      items.forEach((item, index) => {
        item.classList.toggle('is-active', index === activeIndex)
      })
    }
    const schedule = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }

    update()
    const scrollTarget: HTMLElement | Window = scrollContainer ?? window
    scrollTarget.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    const ro = new ResizeObserver(schedule)
    items.forEach((item) => ro.observe(item))

    return () => {
      ro.disconnect()
      scrollTarget.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <article className="page">
      <section className="story-intro">
        <h2 className="page-title">What Happened</h2>

        <div className="story-intro-grid">
          <img
            className="story-intro-image"
            src="/images/dalton-cowboy-hat.jfif"
            alt="Dalton Eatherly in a cowboy hat"
          />

          <div className="story-summary-column">
            <p className="story-demeanor">
              Dalton is known by supporters for keeping calm while recording
              public encounters. Even when people get loud or hostile, he keeps
              the camera rolling and documents what happens.
            </p>

            <blockquote className="pull-quote">
              <p>"I'm not paying if you are kicking me out."</p>
              <footer>Dalton at Bob's Steak and Chop House, May 9</footer>
            </blockquote>
          </div>

          <aside className="story-aside">
            <h3 className="fact-block-title">KEY FACTS</h3>
            <ul className="fact-block">
              <li>Self-defense - straight to jail</li>
              <li>Held on $1.25 million bond</li>
              <li>First time facing felony charges</li>
              <li>Drew his licensed firearm only after being physically attacked</li>
              <li>Faces 15 to 60 years on the lead charge</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="story-events">
        <h2 className="page-title">EVENT SUMMARY</h2>

        <div className="timeline" ref={ref}>
        <section className="timeline-event">
          <h3 className="timeline-date">Saturday, May 9, Nashville</h3>
          <ul className="timeline-bullets">
            <li>Chud is at Bob's Steak &amp; Chop House while livestreaming.</li>
            <li>Staff tell him to stop streaming. He keeps going. Streaming is what he does.</li>
            <li>Restaurant moves to kick him out before he's eaten his food.</li>
            <li>They still want him to pay the $371.55 bill on the way out.</li>
            <li>
              Chud refuses: <em>"I'm not paying if you are kicking me out."</em>
            </li>
          </ul>
        </section>

        <section className="timeline-event">
          <h3 className="timeline-date">Sunday, May 10, Nashville</h3>
          <ul className="timeline-bullets">
            <li>
              Officers spot him on the street and detain him over the restaurant incident from the
              day before.
            </li>
            <li>He pulls his arm away during the cuffing.</li>
            <li>
              Charged with disorderly conduct, theft of services (for the meal he wasn't allowed to
              eat), and resisting arrest.
            </li>
          </ul>
        </section>

        <section className="timeline-event">
          <h3 className="timeline-date">Wednesday, May 13, Clarksville</h3>

          <div className="timeline-sub">
            <p className="timeline-time">9:00 a.m.</p>
            <ul className="timeline-bullets">
              <li>
                He has a civil hearing at Montgomery County Courthouse over an alleged $3,300 debt
                brought by Midland Credit Management, a debt-buyer collection case.
              </li>
            </ul>
          </div>

          <div className="timeline-sub">
            <p className="timeline-time">~1:20 p.m.</p>
            <p className="timeline-lede">Outside the courthouse, on Chud's own livestream:</p>
            <ul className="timeline-bullets">
              <li>A group of people can be seen laughing and pointing in his direction.</li>
              <li>
                One man, later identified in court filings as Joshua Fox, tells him to walk away,
                then approaches him saying, <em>"I have PTSD."</em>
              </li>
              <li>
                In Chud's words:{' '}
                <em>
                  "He started whaling on me, even after I had to defend myself by shooting him."
                </em>
              </li>
              <li>Chud draws his firearm and fires. Both men are hit.</li>
            </ul>
            <p className="muted-note">
              Exactly who initiated physical contact is disputed and is a matter
              for the courts to decide.
            </p>
          </div>

          <div className="timeline-sub">
            <p className="timeline-time">Shortly after</p>
            <ul className="timeline-bullets">
              <li>
                Sheriff's deputies and Clarksville PD arrive. Both men are transported to hospitals
                in stable condition. Chud continues livestreaming from the gurney.
              </li>
            </ul>
          </div>
        </section>

        <section className="timeline-event">
          <h3 className="timeline-date">Friday, May 15, Arraignment</h3>
          <ul className="timeline-bullets">
            <li>Chud appears in court from the hospital.</li>
            <li>
              The state stacks the charges: attempted criminal homicide, employing a firearm during
              a dangerous felony, aggravated assault, and reckless endangerment.
            </li>
            <li>
              Judge Reid Poland III sets bond at <strong>$1.25 million</strong>, a bond that's
              effectively impossible for an ordinary person to post.
            </li>
            <li>Attempted criminal homicide carries 15 to 60 years in Tennessee.</li>
            <li>Chud closes his eyes when the bond is read out.</li>
            <li>
              Preliminary hearing set for <strong>May 26</strong>. Jake Fendley appointed as his
              attorney.
            </li>
          </ul>
        </section>
        </div>
      </section>
    </article>
  )
}
