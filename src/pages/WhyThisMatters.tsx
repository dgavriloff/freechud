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
          than repeat offenders, as in the case of Dayton Knapton in Michigan,
          who now faces manslaughter charges after defending his home in the
          middle of the night against seven intruders
          <sup className="citation-mark">
            <a href="#source-knapton">*</a>
          </sup>
          .
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
                <a
                  href="https://publications.tnsosfiles.com/pub/2023%20TN%20Constitution.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tennessee Constitution, Article I, Section 16
                </a>
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
              <strong>Dayton Knapton case:</strong> Sources:{' '}
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
              . The comparison is based on 8 years of Montgomery County public
              court records, with more than 10,000 criminal cases investigated,
              related news articles reviewed, and findings cross-referenced
              against the court system.
            </li>
          </ol>
        </section>
      </div>
    </article>
  )
}
