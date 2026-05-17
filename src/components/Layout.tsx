import { Outlet, Link, NavLink, useLocation } from 'react-router-dom'
import { CHUD_ICON_URL } from '../constants'

export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className={`site${isHome ? ' site--home' : ''}`}>
      <header className="navbar">
        <Link to="/" className="navbar-brand">
          <span className="navbar-logo">
            <img src={CHUD_ICON_URL} alt="" />
          </span>
          <span className="navbar-name">FREE CHUD</span>
        </Link>
        <nav className="navbar-nav" aria-label="Primary">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/story">What Happened</NavLink>
          <NavLink to="/why-this-matters">Why This Matters</NavLink>
          <NavLink to="/support">Support</NavLink>
        </nav>
      </header>

      <div className="site-scroll">
        <main className="site-content">
          <Outlet />
        </main>

        <footer className="site-footer">
          <p className="site-footer-disclaimer">
            Criminal charges and contested facts described on this site are
            allegations. Everyone is presumed innocent until proven guilty.
          </p>
        </footer>
      </div>
    </div>
  )
}
