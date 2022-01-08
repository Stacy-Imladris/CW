function humanReadable (seconds) {
    if (seconds === 0) {return '00:00:00'}
    let hour = Math.floor(seconds / 3600).toString()
    let min = Math.floor((seconds / 60) - hour * 60 ).toString()
    let sec = Math.floor(seconds % 60).toString()
      let h = hour.length === 2 ? hour : hour.length === 1 && hour !== 0 ? '0' + hour : '00'
      let m = min.length === 2 ? min : min.length === 1 && min !== 0 ? '0' + min : '00'
      let s = sec.length === 2 ? sec : sec.length === 1 && sec !== 0 ? '0' + sec : '00'
    return `${h}:${m}:${s}`
  }