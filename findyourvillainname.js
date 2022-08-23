function getVillainName(birthday){
    let arr = [birthday.getMonth(), birthday.getDate() % 10]
    const m = {0: "Evil", 1: "Vile", 2: "Cruel", 3: "Trashy",
               4: "Despicable", 5: "Embarrassing", 6: "Disreputable", 7: "Atrocious",
               8: "Twirling", 9: "Orange", 10: "Terrifying", 11: "Awkward"}
    const d = {0: "Mustache", 1: "Pickle", 2: "Hood Ornament", 3: "Raisin", 4: "Recycling Bin",
               5: "Potato", 6: "Tomato", 7: "House Cat", 8: "Teaspoon", 9: "Laundry Basket"}
    return `The ${m[arr[0]]} ${d[arr[1]]}`
  }