import { Link } from 'react-router-dom'

export default function Assailant() {
  return (
    <article className="page">
      <p className="page-back">
        <Link to="/">&larr; Back</Link>
      </p>

      <section className="story-intro">
        <h2 className="page-title">The Assailant</h2>

        <aside className="story-aside">
          <h3 className="fact-block-title">AT A GLANCE</h3>
          <ul className="fact-block">
            <li>Name: Joshua Fox</li>
            <li>Age: TODO</li>
            <li>From: TODO</li>
            <li>Distance traveled to courthouse: TODO miles</li>
            <li>Publicly stated intent to harm Chud before the attack</li>
          </ul>
        </aside>

        <p>
          The man who attacked Dalton outside the Montgomery County Courthouse on
          May 13 was not a stranger reacting in the moment. He was Joshua Fox, and
          he had already announced — publicly, in writing — that he wanted to hurt
          Chud. Then he traveled to do it.
        </p>
        <p>
          This page lays out who he is, what he said before the attack, and how
          far he came to act on it.
        </p>
      </section>

      <section className="story-events">
        <h2 className="page-title">IN HIS OWN WORDS</h2>
        <p className="muted-note">
          Screenshots from Fox's X account where he stated intent to harm Dalton.
          TODO: replace placeholders with real screenshots saved to
          <code> public/assailant/</code>.
        </p>

        <div className="assailant-posts">
          <figure className="assailant-post">
            <div className="assailant-post-placeholder">X post screenshot 1</div>
            <figcaption>TODO: date — short caption / context.</figcaption>
          </figure>
          <figure className="assailant-post">
            <div className="assailant-post-placeholder">X post screenshot 2</div>
            <figcaption>TODO: date — short caption / context.</figcaption>
          </figure>
          <figure className="assailant-post">
            <div className="assailant-post-placeholder">X post screenshot 3</div>
            <figcaption>TODO: date — short caption / context.</figcaption>
          </figure>
        </div>
      </section>

      <section className="story-events">
        <h2 className="page-title">HE TRAVELED TO DO IT</h2>

        <figure className="assailant-map">
          <div className="assailant-map-placeholder">
            Map placeholder — origin to Montgomery County Courthouse
          </div>
          <figcaption>
            TODO: Fox traveled approximately X miles from [origin city] to the
            Montgomery County Courthouse in Clarksville.
          </figcaption>
        </figure>

        <p>
          The distance matters. This was not a chance encounter on his own block.
          He drove to Clarksville on a day Dalton's hearing was public knowledge,
          and confronted him outside the courthouse.
        </p>
      </section>

      <section className="story-events">
        <h2 className="page-title">WHAT HE DID THAT DAY</h2>
        <ul className="timeline-bullets">
          <li>Stood with a group laughing and pointing at Dalton.</li>
          <li>
            Approached Dalton saying, <em>"I have PTSD."</em>
          </li>
          <li>Initiated the physical attack.</li>
          <li>
            In Dalton's words:{' '}
            <em>
              "He started whaling on me, even after I had to defend myself by
              shooting him."
            </em>
          </li>
        </ul>
        <p className="muted-note">
          For the full sequence, see the <Link to="/story">Story timeline</Link>.
        </p>
      </section>
    </article>
  )
}
