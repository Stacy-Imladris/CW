function validSolution(board){
    let array1 = [[], [], [], [], [], [], [], [], []]
    board.map((el, index) => {
      for (let i = 1; i <= 9; i++){
        array1[index].push(el.indexOf(i))
      }})
    if (array1.find(a => a.find(i => i === -1)) !== undefined) {
      return false
    }
    let arr = []
    for (let i = 0; i < 9; i++){
      arr.push([board[0][i], board[1][i], board[2][i], board[3][i], board[4][i], board[5][i], board[6][i], board[7][i], board[8][i]])
    }
    let array2 = [[], [], [], [], [], [], [], [], []]
    arr.map((el, index) => {
      for (let i = 1; i <= 9; i++){
        array2[index].push(el.indexOf(i))
      }})
    if (array2.find(a => a.find(i => i === -1)) !== undefined) {
      return false
    }
    let first = [board[0], board[1], board[2]]
    let second = [board[3], board[4], board[5]]
    let third = [board[6], board[7], board[8]]
    let lastTest = []
    lastTest.push(first.map(i => [i[0], i[1], i[2]]).join('').replace(/,/g, ''))
    lastTest.push(first.map(i => [i[3], i[4], i[5]]).join('').replace(/,/g, ''))
    lastTest.push(first.map(i => [i[6], i[7], i[8]]).join('').replace(/,/g, ''))
   lastTest.push(second.map(i => [i[0], i[1], i[2]]).join('').replace(/,/g, ''))
    lastTest.push(second.map(i => [i[3], i[4], i[5]]).join('').replace(/,/g, ''))
    lastTest.push(second.map(i => [i[6], i[7], i[8]]).join('').replace(/,/g, ''))
   lastTest.push(third.map(i => [i[0], i[1], i[2]]).join('').replace(/,/g, ''))
   lastTest.push(third.map(i => [i[3], i[4], i[5]]).join('').replace(/,/g, ''))
   lastTest.push(third.map(i => [i[6], i[7], i[8]]).join('').replace(/,/g, ''))
    let result = lastTest.filter(el => el.includes(1) && el.includes(2) && el.includes(3) 
                                 && el.includes(4) && el.includes(5) &&  el.includes(6) 
                                 && el.includes(7) && el.includes(8) && el.includes(9))
    if (result.length < 9) {
      return false
    }
    return true
  }