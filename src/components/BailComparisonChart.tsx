import ExternalLink from './ExternalLink'
import { bailComparisons } from '../data/bailComparisons'

const maxBail = Math.max(...bailComparisons.map((item) => item.amount))

const formatBail = (amount: number) => {
  if (amount >= 1000000) {
    return amount === 1000000 ? '$1.0M' : `$${(amount / 1000000).toFixed(2).replace(/0$/, '')}M`
  }

  return `$${Math.round(amount / 1000)}K`
}

export default function BailComparisonChart() {
  return (
    <div className="bail-chart" aria-label="Initial bond comparison chart">
      {bailComparisons.map((item) => (
        <div
          className={`bail-row${item.highlight ? ` bail-row--${item.highlight}` : ''}`}
          key={item.label}
        >
          <div className="bail-label">
            {item.sourceUrl ? (
              <ExternalLink
                className="bail-source-link"
                href={item.sourceUrl}
              >
                {item.label}
              </ExternalLink>
            ) : (
              <strong>{item.label}</strong>
            )}
            <span>{item.detail}</span>
          </div>
          <div className="bail-bar-track">
            <div
              className="bail-bar"
              style={{ width: `${(item.amount / maxBail) * 100}%` }}
            />
          </div>
          <strong className="bail-value">{formatBail(item.amount)}</strong>
        </div>
      ))}
    </div>
  )
}
