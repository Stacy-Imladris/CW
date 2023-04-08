function isItANum(str) {
  const preparedNumber = str.replace(/[^\d]/g, '')
  const isPhoneNumber = preparedNumber.length === 11 && preparedNumber[0] === '0'
  return isPhoneNumber ? preparedNumber : 'Not a phone number'
}