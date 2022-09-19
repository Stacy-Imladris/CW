function passTheDoorMan (word){
  let el = [...word].find((f, i, arr) => arr[i - 1] === f)
  return (el.charCodeAt() - 96) * 3
}