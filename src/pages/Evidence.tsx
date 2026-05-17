import { Link } from 'react-router-dom'

export default function Evidence() {
  return (
    <article className="page">
      <p className="page-back">
        <Link to="/">&larr; Back</Link>
      </p>

      <h2 className="page-title">EVIDENCE</h2>
      <div className="page-content">
        <p>
          This section will collect clips, court records, screenshots, source
          notes, and other materials that help readers review the case directly.
        </p>
        <p className="muted-note">
          Placeholder page. Evidence and citations will be added here as they
          are verified.
        </p>
      </div>
    </article>
  )
}
