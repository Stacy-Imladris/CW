function sumOfABeach(beach) {
    let sand = beach.match(/sand/gi)
    let water = beach.match(/water/gi)
    let fish = beach.match(/fish/gi)
    let sun = beach.match(/sun/gi)
    return (sand ? sand.length : 0) + (water ? water.length : 0) 
      + (fish ? fish.length : 0) + (sun ? sun.length : 0)
  }