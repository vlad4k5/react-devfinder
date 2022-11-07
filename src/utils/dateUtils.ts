
const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
})

export const formatDate = (date: string): string => {
  return localDate.format(new Date(date))
}