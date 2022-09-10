function sillycase(silly) {
  let half = Math.ceil(silly.length / 2)
  return [...silly].map((m, i) => i >= half ? m.toUpperCase() : m.toLowerCase()).join('')
 }