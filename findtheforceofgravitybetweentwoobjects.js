const solution = (val, unit) => {
  const obj = {g: 1e-3, kg: 1, m: 1, cm: 1e-2, mg: 1e-6, μg: 1e-9, lb: .453592, mm: 1e-3, μm: 1e-6, ft: .3048}
  return 6.67e-11 * val[0] * obj[unit[0]] * val[1] * obj[unit[1]] / ( val[2] * obj[unit[2]] ) ** 2 ;
}