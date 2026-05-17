export type BailComparison = {
  label: string
  detail: string
  amount: number
  highlight?: 'gold' | 'red'
  sourceUrl?: string
}

export const bailComparisons: BailComparison[] = [
  {
    label: 'Conway',
    detail: 'Infant rape + murder',
    amount: 100000,
    sourceUrl:
      'https://clarksvillenow.com/local/conway-pleads-guilty-to-killing-infant-daughter-in-rape-murder-abuse-case/',
  },
  { label: 'Johnson', detail: 'Murder, rearrested', amount: 125000 },
  {
    label: 'Merriweather',
    detail: 'Attempted murder',
    amount: 252000,
    sourceUrl:
      'https://clarksvillenow.com/local/suspect-wanted-for-june-shooting-in-clarksville/',
  },
  { label: 'Murder average', detail: '16 cases', amount: 348000, highlight: 'gold' },
  { label: 'Murder median', detail: '16 cases', amount: 325000, highlight: 'gold' },
  {
    label: 'Ogburn',
    detail: 'Double murder, felon',
    amount: 750000,
    sourceUrl:
      'https://clarksvillenow.com/local/murder-trial-ogburn-found-guilty-of-killing-woman-by-unloading-ak-47-into-car/',
  },
  {
    label: 'Konen',
    detail: 'Double homicide',
    amount: 1000000,
    sourceUrl:
      'https://www.wsmv.com/2025/05/15/former-nashville-paramedic-charged-double-homicide-wife-father-in-law/',
  },
  { label: 'Eatherly', detail: 'Attempted murder, self-defense claim', amount: 1250000, highlight: 'red' },
]
