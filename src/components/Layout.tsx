import { Outlet, Link, useLocation } from 'react-router-dom'

export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className={`site${isHome ? ' site--home' : ''}`}>
      <header className="site-header">
        <h1 className="site-title">
          <Link to="/">Free Chud the Builder</Link>
        </h1>
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
