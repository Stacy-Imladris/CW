function sumTwoSmallestNumbers(numbers) {  
    const compareNumbers = (a, b) => a > b? 1 : a === b ? 0 : -1;
    return numbers.sort(compareNumbers)[0] + numbers.sort(compareNumbers)[1];
  }