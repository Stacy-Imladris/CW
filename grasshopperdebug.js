function convertToCelsius (temperature) {
  const celsius = (temperature - 32) * (5/9)
  return celsius
}

function weatherInfo (temp) {
  const c = convertToCelsius(temp)
  return c > 0 ? `${c} is above freezing temperature` : `${c} is freezing temperature`
}