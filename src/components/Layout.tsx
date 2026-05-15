import { Outlet, Link, NavLink, useLocation } from 'react-router-dom'
import { CHUD_PHOTO_URL } from '../constants'

export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className={`site${isHome ? ' site--home' : ''}`}>
      <header className="navbar">
        <Link to="/" className="navbar-brand">
          <img src={CHUD_PHOTO_URL} alt="" className="navbar-logo" />
          <span className="navbar-name">FREE CHUD</span>
        </Link>
        <nav className="navbar-nav" aria-label="Primary">
          <NavLink to="/story">Story</NavLink>
          <NavLink to="/support">Support</NavLink>
        </nav>
      </header>

      <main className="site-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>
          Contribute to this website on{' '}
          <a
            href="https://github.com/dgavriloff/freechud"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </footer>
    </div>
  )
}
