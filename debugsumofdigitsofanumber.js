const getSumOfDigits = int => [...int.toString()].map(Number).reduce((acc, r) => acc + r)