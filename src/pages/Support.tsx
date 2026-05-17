import {
  CONTACT_EMAIL,
  CONTACT_X_URL,
  GIVESENDGO_URL,
  PUMPFUN_URL,
  TSHIRT_URL,
} from '../constants'

const fundingStats = {
  raised: 233590.68,
  bondPosting: 125000,
  legalDefenseTarget: 300000,
  legalDefenseRaised: 25000,
}

const totalWorkingNeed = fundingStats.bondPosting + fundingStats.legalDefenseTarget

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount)

const milestones = [
  {
    label: 'Total raised on GiveSendGo',
    amount: fundingStats.raised,
    displayAmount: formatCurrency(fundingStats.raised),
    target: totalWorkingNeed,
    note: 'Last update May 17, 2026.',
  },
  {
    label: 'Estimated to post bond',
    amount: fundingStats.bondPosting,
    displayAmount: formatCurrency(fundingStats.bondPosting),
    target: fundingStats.bondPosting,
    note: '10% of the $1.25 million bond.',
  },
  {
    label: 'Working legal-defense target',
    amount: fundingStats.legalDefenseRaised,
    displayAmount: formatCurrency(fundingStats.legalDefenseTarget),
    target: fundingStats.legalDefenseTarget,
    note: 'Initial attorney-fee estimate.',
  },
]

export default function Support() {
  return (
    <article className="page">
      <h2 className="page-title">HOW TO HELP</h2>
      <div className="page-content">
        <section className="support-donate-card">
          <img
            className="support-donate-image"
            src="/images/dalton-turquoise-shirt.jfif"
            alt="Dalton Eatherly"
          />
          <div className="support-donate-copy">
            <h3>Help bring Dalton home.</h3>
            <p>
              The bond is $1.25 million. The lead charge carries 15 to 60 years.
              Dalton needs an attorney who can fight, and to provide for his
              family during these hard times.
            </p>
            <p>
              Every dollar goes to his legal defense and his family's living
              expenses.
            </p>
          </div>

          <div className="support-donate-panel">
            <p className="support-raised-label">Raised so far</p>
            <strong className="support-raised-amount">
              {formatCurrency(fundingStats.raised)}
            </strong>
            <a
              className="btn btn-primary support-donate-button"
              href={GIVESENDGO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate on GiveSendGo
            </a>
            <a
              className="support-givesendgo-logo-link"
              href={GIVESENDGO_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GiveSendGo campaign"
            >
            <img
              className="support-givesendgo-logo"
              src="/images/givesendgo-logo.png"
              alt="GiveSendGo"
            />
          </a>
        </div>
      </section>

        <section className="support-section">
          <h3>Funding milestones</h3>
          <div className="support-milestones">
            {milestones.map((milestone) => {
              const progress = Math.min(100, (milestone.amount / milestone.target) * 100)

              return (
                <a
                  className="support-milestone"
                  href={GIVESENDGO_URL}
                  key={milestone.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="support-milestone-header">
                    <span>{milestone.label}</span>
                    <strong>{milestone.displayAmount}</strong>
                  </div>
                  <div className="support-meter" aria-hidden="true">
                    <span style={{ width: `${progress}%` }} />
                  </div>
                  <p>{milestone.note}</p>
                </a>
              )
            })}
          </div>
        </section>

        <section className="support-section">
          <h3>Other ways to support</h3>
          <div className="support-actions">
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

        <section className="support-section support-merch">
          <img
            className="support-merch-image"
            src="/images/free-chud-t-shirt.jpeg"
            alt="Free Chud t-shirt"
          />
          <div className="support-merch-copy">
            <h3>Buy a shirt</h3>
            <p>
              You can also support the effort by buying a Free Chud t-shirt.
            </p>
          </div>
          <div className="support-merch-action">
            <a
              className="btn btn-secondary"
              href={TSHIRT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy a t-shirt
            </a>
          </div>
        </section>

        <section className="support-section">
          <h3>Contact</h3>
          <p>
            For updates, coordination, or questions about helping, reach out to
            Tom on{' '}
            <a href={CONTACT_X_URL} target="_blank" rel="noopener noreferrer">
              X
            </a>{' '}
            who is in direct contact with Dalton or contact the{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>
              WCAP
            </a>
            .
          </p>
        </section>

        <section className="support-section">
          <h3>Contribute to the site</h3>
          <p>
            Want to improve this website? Contribute on{' '}
            <a
              href="https://github.com/dgavriloff/freechud"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
          <p className="muted-note">
            We are just regular people working every day to help Dalton.
          </p>
        </section>
      </div>
    </article>
  )
}
