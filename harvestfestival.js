function plant(seed, water, fert, temp){
    let str = '-'.repeat(water) + seed.repeat(fert)
    return temp >= 20 && temp <= 30 ? str.repeat(water) : '-'.repeat(water * water) + seed
  }