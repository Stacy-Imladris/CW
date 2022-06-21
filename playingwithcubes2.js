function Cube(n = 0) {
  this.side = n
  this.getSide = function() {
    return this.side
  }
  this.setSide = function(n) {
    this.side = Math.abs(n)
  }
}