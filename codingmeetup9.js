const isAgeDiverse = (list) => {
  let ages = list.map(m => Math.floor(m.age / 10))
  if (Math.max.apply(null, ages) >= 10){
    for (let i = 1; i < 10; i++){
      if (!ages.includes(i)) return false
    }
  } else return false
  return true
}