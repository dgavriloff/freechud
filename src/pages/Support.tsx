import {
  ARCHETYPE_THEORY_X_URL,
  CONTACT_EMAIL,
  CONTACT_X_URL,
  GIVESENDGO_URL,
  PUMPFUN_URL,
  TSHIRT_URL,
  WCAP_URL,
} from '../constants'
import ExternalLink from '../components/ExternalLink'
import { Page, PageContent, PageTitle } from '../components/Page'
import { formatCurrency, fundingMilestones, fundingStats } from '../data/funding'

export default function Support() {
  return (
    <Page>
      <PageTitle>HOW TO HELP</PageTitle>
      <PageContent>
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
            <ExternalLink
              className="btn btn-primary support-donate-button"
              href={GIVESENDGO_URL}
            >
              Donate on GiveSendGo
            </ExternalLink>
            <ExternalLink
              className="support-givesendgo-logo-link"
              href={GIVESENDGO_URL}
              aria-label="Open GiveSendGo campaign"
            >
              <img
                className="support-givesendgo-logo"
                src="/images/givesendgo-logo.png"
                alt="GiveSendGo"
              />
            </ExternalLink>
          </div>
        </section>

        <section className="support-section">
          <h3>Funding milestones</h3>
          <div className="support-milestones">
            {fundingMilestones.map((milestone) => {
              const progress = Math.min(100, (milestone.amount / milestone.target) * 100)

              return (
                <ExternalLink
                  className="support-milestone"
                  href={GIVESENDGO_URL}
                  key={milestone.label}
                >
                  <div className="support-milestone-header">
                    <span>{milestone.label}</span>
                    <strong>{milestone.displayAmount}</strong>
                  </div>
                  <div className="support-meter" aria-hidden="true">
                    <span style={{ width: `${progress}%` }} />
                  </div>
                  <p>{milestone.note}</p>
                </ExternalLink>
              )
            })}
          </div>
        </section>

        <section className="support-section">
          <h3>Other ways to support</h3>
          <div className="support-actions">
            <ExternalLink
              className="btn btn-secondary"
              href={PUMPFUN_URL}
            >
              Buy $CHUD on pump.fun
            </ExternalLink>
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
            <ExternalLink
              className="btn btn-secondary"
              href={TSHIRT_URL}
            >
              Buy a t-shirt
            </ExternalLink>
          </div>
        </section>

        <section className="support-section">
          <h3>Contact</h3>
          <ul className="support-contact-list">
            <li>
              <strong>Updates and coordination:</strong>{' '}
              <ExternalLink href={CONTACT_X_URL}>
                Tom on X.com
              </ExternalLink>
              , who is in direct contact with Dalton.
            </li>
            <li>
              <strong>
                <ExternalLink href={WCAP_URL}>
                  WCAP
                </ExternalLink>{' '}
                inquiries:
              </strong>{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li>
              <strong>Operation Free Dalton:</strong>{' '}
              <ExternalLink
                href={ARCHETYPE_THEORY_X_URL}
              >
                ArchetypeTheory on X.com
              </ExternalLink>
            </li>
          </ul>
        </section>

        <section className="support-section">
          <h3>Contribute to the site</h3>
          <p>
            Want to improve this website? Contribute on{' '}
            <ExternalLink
              href="https://github.com/dgavriloff/freechud"
            >
              GitHub
            </ExternalLink>
            .
          </p>
          <p className="muted-note">
            We are just regular people working every day to help Dalton.
          </p>
        </section>
      </PageContent>
    </Page>
  )
}
