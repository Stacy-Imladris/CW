function getDrinkByProfession(param){
    const obj = {
      'jabroni': "Patron Tequila",
      'school counselor':	"Anything with Alcohol",
      'programmer':	"Hipster Craft Beer",
      'bike gang member':	"Moonshine",
      'politician':	"Your tax dollars",
      'rapper':	"Cristal",
    }
    const keys = Object.keys(obj)
    return keys.includes(param.toLowerCase()) ? obj[param.toLowerCase()] : 'Beer'
  }