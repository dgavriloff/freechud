import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

export default function Story() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const items = root.querySelectorAll('.timeline-event')
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    items.forEach((item) => obs.observe(item))
    return () => obs.disconnect()
  }, [])

  return (
    <article className="page">
      <p className="page-back">
        <Link to="/">&larr; Back</Link>
      </p>
      <h2 className="page-title">What happened</h2>

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
            <p className="timeline-lede">Outside the courthouse, on his own livestream:</p>
            <ul className="timeline-bullets">
              <li>A group of people are laughing at him and pointing.</li>
              <li>
                One man, later identified as Joshua Fox, tells him to walk away, then approaches
                him saying, <em>"I have PTSD."</em>
              </li>
              <li>
                In Chud's words:{' '}
                <em>
                  "He started whaling on me, even after I had to defend myself by shooting him."
                </em>
              </li>
              <li>Chud draws his firearm and fires. Both men are hit.</li>
            </ul>
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
    </article>
  )
}
