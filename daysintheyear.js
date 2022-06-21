const yearDays = year => {
  let days = year % 4 || !(year % 100) && year % 400 ? 365 : 366
  return `${year} has ${days} days`
}