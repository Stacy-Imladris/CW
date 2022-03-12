const duckDuckGoose = (players, goose) => {
  let count = goose % players.length
  return count ? players[count - 1].name : players[players.length - 1].name
}