function Counter() {
  this.value = 0;
  this.increase = function(){
    this.value++
  }
  this.getValue = function(){
    return this.value
  }
  this.reset = function(){
    this.value = 0
  }   
}