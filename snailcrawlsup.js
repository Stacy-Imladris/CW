function snail(column, day, night) {
  let days = 0
  let count = 0
  while (count < column) {
    count += day
    days++
    if (count >= column) return days
    else count -= night
  }
}