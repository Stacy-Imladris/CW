function formatDataValue(data) {
  let tb = Math.floor(data / 1000000)
  let gb = Math.floor((data - 1000000 * tb) / 1000)
  let mb = data % 1000
  return data ? [tb ? `${tb}TB` : '', gb ? `${gb}GB` : '', mb ? `${mb}MB` : '']
    .filter(Boolean).join(' ') : '0MB'
}