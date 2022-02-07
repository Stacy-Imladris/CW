const datingRange = (age) => age <= 14 ? `${Math.floor(age - 0.1 * age)}-${Math.floor(age + 0.1 * age)}` :
  `${Math.floor(age / 2 + 7)}-${Math.floor((age - 7) * 2)}`