"use strict";

function flattenAndSort(array) {
  if (array.length === 0) {
    return array
  } else {
    let arr = array.filter(f => f.length !== 0).reduce((main, i) => [...main, ...i], [])
    return arr.sort((a, b) => a - b)
  }
}