const stringMerge = (str1, str2, letter) => str1.slice(0, str1.indexOf(letter)) + letter + str2.slice(str2.indexOf(letter) + 1)