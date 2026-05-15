export default function App() {
  return (
    <div className="site">
      <header className="site-header">
        <h1 className="site-title">
          <a href="/">Freechud</a>
        </h1>
        <p className="site-description">Just another WordPress-style site</p>
        <nav className="site-nav" aria-label="Primary">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="site-content">
        <article className="post">
          <h2 className="post-title">
            <a href="#post-1">Hello, world!</a>
          </h2>
          <div className="post-meta">
            Posted on <a href="#">May 15, 2026</a> by <a href="#">admin</a>
          </div>
          <div className="post-content">
            <p>
              Welcome to Freechud. This is your first post. Edit or delete it,
              then start writing! The site is scaffolded with Vite + React and
              styled to mimic a classic WordPress theme &mdash; serif body
              type, a centered single-column layout, and quiet metadata.
            </p>
            <p>
              <a href="#" className="read-more">Continue reading &rarr;</a>
            </p>
          </div>
        </article>

        <article className="post">
          <h2 className="post-title">
            <a href="#post-2">A sample post with formatting</a>
          </h2>
          <div className="post-meta">
            Posted on <a href="#">May 14, 2026</a> by <a href="#">admin</a>
          </div>
          <div className="post-content">
            <p>
              Below are a few elements styled the WordPress way, so you can see
              how the typography hangs together before any real content goes
              in.
            </p>
            <blockquote>
              &ldquo;Design is not just what it looks like and feels like.
              Design is how it works.&rdquo;
            </blockquote>
            <p>
              Inline <code>code</code> looks like that, and block code looks
              like this:
            </p>
            <pre><code>{`function greet(name) {
  return \`Hello, \${name}!\`;
}`}</code></pre>
          </div>
        </article>
      </main>

      <footer className="site-footer">
        <p>
          &copy; {new Date().getFullYear()} Freechud &middot; Proudly built with{' '}
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">Vite</a>
        </p>
      </footer>
    </div>
  )
}
