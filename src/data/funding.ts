export const fundingStats = {
  raised: 233590.68,
  lastUpdated: 'May 17, 2026',
  bondTotal: 1250000,
  bondPosting: 125000,
  legalDefenseTarget: 300000,
  legalDefenseRaised: 25000,
}

export const totalWorkingNeed =
  fundingStats.bondPosting + fundingStats.legalDefenseTarget

export const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount)

export const fundingMilestones = [
  {
    label: 'Total raised on GiveSendGo',
    amount: fundingStats.raised,
    displayAmount: formatCurrency(fundingStats.raised),
    target: totalWorkingNeed,
    note: `Last update ${fundingStats.lastUpdated}.`,
  },
  {
    label: 'Estimated to post bond',
    amount: fundingStats.bondPosting,
    displayAmount: formatCurrency(fundingStats.bondPosting),
    target: fundingStats.bondPosting,
    note: `10% of the ${formatCurrency(fundingStats.bondTotal)} bond.`,
  },
  {
    label: 'Working legal-defense target',
    amount: fundingStats.legalDefenseRaised,
    displayAmount: formatCurrency(fundingStats.legalDefenseTarget),
    target: fundingStats.legalDefenseTarget,
    note: 'Initial attorney-fee estimate.',
  },
]
