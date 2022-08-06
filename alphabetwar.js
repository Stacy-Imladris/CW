function alphabetWar(fight){
    const left = {w: 4, p: 3, b: 2, s: 1}
    const right = {m: 4, q: 3, d: 2, z: 1}
    const getSum = (side) => [...fight].map(m => side[m] || 0).reduce((acc, r) => acc + r)
    return getSum(left) > getSum(right) ? "Left side wins!" 
     : getSum(right) > getSum(left) ? "Right side wins!" : "Let's fight again!"
 }