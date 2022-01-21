function htmlspecialchars(formData) {
    const obj = {
     '<': "&lt;",
     '>': "&gt;",
     '"': "&quot;",
     '&': "&amp;"
    }
    return formData.replace(/<|>|"|&/gi, function(matched){
      return obj[matched]
  })
  }