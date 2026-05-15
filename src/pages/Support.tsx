import { Link } from 'react-router-dom'

const GIVESENDGO_URL = 'https://www.givesendgo.com/HelpChud'
const PUMPFUN_URL = 'https://join.pump.fun/HSag/fiqjlk67'

export default function Support() {
  return (
    <article className="page">
      <p className="page-back">
        <Link to="/">&larr; Back</Link>
      </p>
      <h2 className="page-title">How to Support Chud</h2>
      <div className="page-content">
        <p>Two ways to help bring Chud home:</p>
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
      </div>
    </article>
  )
}
