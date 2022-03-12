const whoseMove = (lastPlayer, win) => {
    let secondPlayer = lastPlayer === 'white' ? 'black' : 'white'
    return win ? lastPlayer : secondPlayer 
  }