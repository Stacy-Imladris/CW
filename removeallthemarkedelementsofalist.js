Array.prototype.remove_ = function(integer_list, values_list){
    return integer_list.filter(f => !values_list.includes(f))
  }