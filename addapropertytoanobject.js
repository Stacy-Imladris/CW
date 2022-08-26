function addProperty(obj, prop, value) {
  if (obj[prop] !== undefined) throw new Error
  obj[prop] = value
}