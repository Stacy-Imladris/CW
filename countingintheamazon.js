function countArara(n) {
    const {one, two} = {one: 'anane', two: 'adak '}
    const twos = Math.floor(n / 2)
    const ones = n % 2
    let result = two.repeat(twos) + one.repeat(ones)
    return result[result.length - 1] === ' ' ? result.slice(0, result.length - 1) : result
  }