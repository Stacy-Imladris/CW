let names = []

function handOutGift(name) {
  if (!names.includes(name)) names.push(name)
  else throw new Error
}