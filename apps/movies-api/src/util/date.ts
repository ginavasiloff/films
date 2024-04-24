export const dateDifferenceInMonths = (
  dateInitial: Date,
  dateFinal: Date,
): number => {
  const yearDiffInMonths =
    (dateFinal.getFullYear() - dateInitial.getFullYear()) * 12
  const monthDiff = dateFinal.getMonth() - dateInitial.getMonth()
  return Math.max(yearDiffInMonths + monthDiff, 0)
}
