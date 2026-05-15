import { Link } from 'react-router-dom'

export default function Story() {
  return (
    <article className="page">
      <p className="page-back">
        <Link to="/">&larr; Back</Link>
      </p>
      <h2 className="page-title">Chud's Story</h2>
      <div className="page-content">
        <p>Story coming soon.</p>
      </div>
    </article>
  )
}
