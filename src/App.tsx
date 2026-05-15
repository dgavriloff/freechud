const CHUD_PHOTO_URL = 'https://i.ibb.co/mCK7vXNw/IMG-4070.jpg'
const GIVESENDGO_URL = 'https://www.givesendgo.com/HelpChud'
const PUMPFUN_URL = 'https://join.pump.fun/HSag/fiqjlk67'

export default function App() {
  return (
    <div className="site">
      <header className="site-header">
        <h1 className="site-title">
          <a href="/">Free Chud the Builder</a>
        </h1>
      </header>

      <main className="site-content">
        <section className="hero">
          <figure className="hero-photo">
            <img
              src={CHUD_PHOTO_URL}
              alt="Chud the Builder"
              loading="eager"
            />
          </figure>

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
        </section>
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
