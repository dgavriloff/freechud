import BailComparisonChart from '../components/BailComparisonChart'

export default function WhyThisMatters() {
  return (
    <article className="page">
      <h2 className="page-title">WHY THIS MATTERS</h2>
      <div className="page-content">
        <h3>Why is freeing Dalton important?</h3>
        <p>
          Across the Western hemisphere there has been an increasing statement
          known as a "two tiered justice system". In an increasingly partisan
          and fractured society, law abiding citizens are punished at a higher
          rate than repeat offenders. Recently, this has been seen with X, case.
          Dalton's case represents a cornerstone of the fabric of what separates
          America from the rest of the world - the ability to defend oneself
          within the confines of the law. If you are not lawfully allowed to
          defend yourself when under attack, you can't assure the safety for
          yourself or your family. Dalton's court case will be used in future
          years to either defend the notion that you can be assaulted legally, or
          that you have the right to defend yourself under attack.
        </p>
        <p>
          It is worth noting that Dalton is not simply being charged for
          defending himself, Dalton is being crucified. The next time you have to
          defend your home, your family against a violent assault even if you win
          you could be sentenced to decades in prison.
        </p>
        <p>
          Note below the punitive bail imposed on Dalton compared to career
          criminals:
        </p>

        <div className="bail-chart-header">
          <div>
            <p className="section-kicker">Initial bond comparison</p>
            <h3 className="home-section-title">"Excessive bail shall not be required"</h3>
          </div>
          <p className="bail-chart-note">
            Working supporter comparison. Source notes and case citations should
            be added before final publication.
          </p>
        </div>

        <BailComparisonChart />

        <p className="muted-note">
          Placeholder: add research, citations, and source notes here before
          publication.
        </p>
      </div>
    </article>
  )
}
