class Quark {
    constructor(color, flavor) {
      this.baryon_number = 0.3333333333333333
      this.color = color
      this.flavor = flavor
    }
    interact(quark) {
      [this.color, quark.color] = [quark.color, this.color]
    }
  }