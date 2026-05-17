import BailComparisonChart from '../components/BailComparisonChart'

export default function WhyThisMatters() {
  return (
    <article className="page">
      <h2 className="page-title">WHY THIS MATTERS</h2>
      <div className="page-content">
        <h3>Why is freeing Dalton important?</h3>
        <p>
          Across the Western hemisphere there has been an increasing sentiment
          that law abiding citizens are being subjected to a "two tiered justice
          system". Law abiding citizens are seemingly punished at a higher rate
          than repeat offenders, as evidenced recently by the Dayton Knapton case
          <sup className="citation-mark">
            <a href="#source-knapton">*</a>
          </sup>
          , where a homeowner is facing prison time after firing during an
          alleged garage burglary.
        </p>
        <p>
          Dalton's case represents the fundamental ability to defend oneself
          within the confines of the law. If you are not lawfully allowed to
          defend yourself when under attack, you can't assure the safety for
          yourself or your family.
        </p>
        <p>
          Dalton's court case will be used in future years to either defend the
          notion that you can be assaulted legally, or that you have the right to
          defend yourself under attack.
        </p>
        <p>
          This is evidenced by the justice system not only imprisoning Dalton
          after he says he acted in self-defense, his bail has been set
          punitively high to make an example of the average man who tries to
          stick up for himself. Dalton is being crucified.
        </p>
        <p>
          What this means is if he loses, the next time you have to defend your
          home or your family against a violent assault even if you survive you
          could be sentenced to decades in prison. We need the law to understand
          it is meant to be upheld fairly.
        </p>
        <p>
          Dalton's bail bond compared to career criminals:
        </p>

        <div className="bail-chart-header">
          <div>
            <p className="section-kicker">Initial bond comparison</p>
            <h3 className="home-section-title">
              "Excessive bail shall not be required"
              <span className="title-attribution">
                Tennessee Constitution, Article I, Section 16
              </span>
              <sup className="citation-mark">
                <a href="#source-bail-chart">‡</a>
              </sup>
            </h3>
          </div>
        </div>

        <BailComparisonChart />

        <p className="bail-chart-note bail-chart-note--below">
          Based on a supporter chart posted by{' '}
          <a
            href="https://x.com/ArchetypeTheory/status/2055874788812333127"
            target="_blank"
            rel="noopener noreferrer"
          >
            ArchetypeTheory
          </a>{' '}
          using Montgomery County public court-record research.
        </p>

        <section className="source-notes" aria-label="Source notes">
          <h3>Source notes</h3>
          <ol>
            <li id="source-knapton">
              <span className="source-marker">*</span>
              <strong>Dayton Knapton case:</strong> White Lake Township,
              Michigan; July 8, 2025 garage shooting; homeowner charged after
              an alleged garage break-in; Matthew Grinage later sentenced to
              365 days in county jail. Sources:{' '}
              <a
                href="https://www.fox2detroit.com/news/oakland-county-man-charged-deadly-shooting-teen-burglar-appear-court"
                target="_blank"
                rel="noopener noreferrer"
              >
                FOX 2 Detroit
              </a>
              ,{' '}
              <a
                href="https://www.clickondetroit.com/news/local/2026/03/31/oakland-county-garage-burglar-sentenced-homeowner-to-appear-in-court-next-month/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ClickOnDetroit
              </a>
              .
            </li>
            <li id="source-bail-chart">
              <span className="source-marker">‡</span>
              <strong>Bail comparison chart:</strong> chart source is{' '}
              <a
                href="https://x.com/ArchetypeTheory/status/2055874788812333127"
                target="_blank"
                rel="noopener noreferrer"
              >
                ArchetypeTheory on X
              </a>
              . ArchetypeTheory described the data work as: "I went back 8 years
              into Montgomery County's public court records." He also described
              building automated scrapers, reviewing more than 10,000 criminal
              cases, scanning news articles, and cross-referencing findings
              against the court system. Full report and underlying case list
              should be linked when available.
            </li>
          </ol>
        </section>
      </div>
    </article>
  )
}
