function toTime(seconds) {
    let hours = seconds / 60 / 60 | 0
    let minutes = (seconds - hours * 60 * 60) / 60 | 0
    return `${hours} hour(s) and ${minutes} minute(s)`
  }