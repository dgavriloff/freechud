import { Link } from 'react-router-dom'

export default function JoshuaFox() {
  return (
    <article className="page">
      <p className="page-back">
        <Link to="/">&larr; Back</Link>
      </p>

      <section className="story-intro">
        <h2 className="page-title">Joshua Fox</h2>

        <aside className="story-aside">
          <h3 className="fact-block-title">AT A GLANCE</h3>
          <ul className="fact-block">
            <li>Name: Joshua Fox</li>
            <li>Age: TODO</li>
            <li>From: TODO</li>
            <li>Distance traveled to courthouse: TODO miles</li>
            <li>Allegedly posted statements of intent to harm Chud before the incident</li>
          </ul>
        </aside>

        <p>
          The man Dalton says attacked him outside the Montgomery County
          Courthouse on May 13 has been identified as Joshua Fox. According to
          posts that appear on his X account, Fox had allegedly written publicly
          that he wanted to harm Chud in the days leading up to the encounter.
        </p>
        <p>
          This page lays out what is publicly known about him, what he is alleged
          to have posted before the incident, and how far he traveled to be at
          the courthouse that day. The facts of who initiated the physical
          encounter are disputed and will be decided in court.
        </p>
      </section>

      <section className="story-events">
        <h2 className="page-title">POSTS ATTRIBUTED TO HIM</h2>
        <p className="muted-note">
          Screenshots that appear to be from an X account attributed to Joshua
          Fox, in which he allegedly stated intent to harm Dalton. Readers can
          review them and judge for themselves. TODO: replace placeholders with
          real screenshots saved to <code>public/joshua-fox/</code>.
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
        <h2 className="page-title">DISTANCE TO THE COURTHOUSE</h2>

        <figure className="assailant-map">
          <div className="assailant-map-placeholder">
            Map placeholder — origin to Montgomery County Courthouse
          </div>
          <figcaption>
            TODO: Fox reportedly traveled approximately X miles from [origin
            city] to the Montgomery County Courthouse in Clarksville.
          </figcaption>
        </figure>

        <p>
          Dalton's hearing was a matter of public record. Readers can draw their
          own conclusions from the distance Fox is reported to have traveled to
          be there that day.
        </p>
      </section>

      <section className="story-events">
        <h2 className="page-title">ON THE LIVESTREAM THAT DAY</h2>
        <p className="muted-note">
          The following is based on Dalton's livestream footage and his own
          account. The facts of the encounter are disputed and will be
          adjudicated in court.
        </p>
        <ul className="timeline-bullets">
          <li>On the livestream, a group can be seen laughing and pointing in Dalton's direction.</li>
          <li>
            A man Dalton identifies as Fox is heard approaching and saying,{' '}
            <em>"I have PTSD."</em>
          </li>
          <li>Dalton says Fox then initiated physical contact.</li>
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
