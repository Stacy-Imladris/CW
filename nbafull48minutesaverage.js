const pointsPer48 = (ppg, mpg) => ppg === 0 ? 0 : Number((48 * ppg / mpg).toFixed(1))