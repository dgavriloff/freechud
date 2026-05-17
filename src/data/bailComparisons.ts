export type BailComparison = {
  label: string
  detail: string
  amount: number
  highlight?: 'gold' | 'red'
}

export const bailComparisons: BailComparison[] = [
  { label: 'Conway', detail: 'Infant rape + murder', amount: 100000 },
  { label: 'Johnson', detail: 'Murder, rearrested', amount: 125000 },
  { label: 'Merriweather', detail: 'Attempted murder', amount: 252000 },
  { label: 'Murder average', detail: '16 cases', amount: 348000, highlight: 'gold' },
  { label: 'Murder median', detail: '16 cases', amount: 325000, highlight: 'gold' },
  { label: 'Ogburn', detail: 'Double murder, felon', amount: 750000 },
  { label: 'Konen', detail: 'Double homicide', amount: 1000000 },
  { label: 'Eatherly', detail: 'Attempted murder, self-defense claim', amount: 1250000, highlight: 'red' },
]
