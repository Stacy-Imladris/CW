function howMuchILoveYou(nbPetals) {
    let rest = nbPetals > 6 ? nbPetals % 6 : nbPetals
    return rest === 0 || rest === 6 ? 'not at all' : rest === 5 ? 'madly' : rest === 4 ? 'passionately' 
    : rest === 3 ? 'a lot' : rest === 2 ? 'a little' : 'I love you'
  }