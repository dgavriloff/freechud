import { Link } from 'react-router-dom'
import { GIVESENDGO_URL, PUMPFUN_URL } from '../constants'

export default function Support() {
  return (
    <article className="page">
      <p className="page-back">
        <Link to="/">&larr; Back</Link>
      </p>
      <h2 className="page-title">HOW TO HELP</h2>
      <div className="page-content">
        <p>
          The bond is $1.25 million. The lead charge carries 15 to 60 years. Dalton
          needs an attorney who can fight, and his family needs to keep the lights on
          while they fight for him.
        </p>
        <p>
          Every dollar goes to his legal defense and his family's living expenses.
          Please join us in bringing him home.
        </p>
        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href={GIVESENDGO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate on GiveSendGo
          </a>
          <a
            className="btn btn-secondary"
            href={PUMPFUN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy $CHUD on pump.fun
          </a>
        </div>
        <p className="muted-note">
          We are just regular people working every day to help Dalton.
        </p>
      </div>
    </article>
  )
}
