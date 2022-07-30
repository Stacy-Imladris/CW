function List(){
    this.countSpecDigits=function(integersList, digitsList){
      let obj = [...integersList.join('')].reduce((obj, r) => {
        obj[r] = (obj[r] | 0) + 1
        return obj
      }, {})
      return digitsList.map(m => [m, obj[m] || 0])
    }
  }