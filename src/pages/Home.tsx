import { Link } from 'react-router-dom'

const CHUD_PHOTO_URL = 'https://i.ibb.co/mCK7vXNw/IMG-4070.jpg'

export default function Home() {
  return (
    <section className="hero">
      <figure className="hero-photo">
        <img
          src={CHUD_PHOTO_URL}
          alt="Chud the Builder"
          loading="eager"
        />
      </figure>

      <div className="hero-actions">
        <Link className="btn btn-primary" to="/story">
          Read his story
        </Link>
        <Link className="btn btn-secondary" to="/support">
          How can I support Chud
        </Link>
      </div>
    </section>
  )
}
