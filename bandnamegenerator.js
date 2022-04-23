const bandNameGenerator = (str) => str[0] === str.slice(-1) ? str[0].toUpperCase() + str.slice(1).repeat(2) 
  : 'The ' + str[0].toUpperCase() + str.slice(1)