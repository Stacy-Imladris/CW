const countAnimals = sentence => sentence.split(' ').filter(f => !isNaN(+f)).reduce((acc, r) => +r + acc, 0)