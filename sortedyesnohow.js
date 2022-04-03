function isSortedAndHow(array) {
    return [...array].sort((a, b) => a - b).toString() === array.join() ? 'yes, ascending' :
           [...array].sort((a, b) => b - a).toString() === array.join() ? 'yes, descending' : 'no'
  }