const hello = (name) => {
    let newName = name ? name.toLowerCase() : 'world'
    let result = newName.split('').map((m, i) => i === 0 ? m.toUpperCase() : m).join('')
    return `Hello, ${result}!`
  }