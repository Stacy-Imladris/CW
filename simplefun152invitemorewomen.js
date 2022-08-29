function inviteMoreWomen(L) {
    let arr = L.reduce((arr, r) => {
      if (r === 1) arr[0] += 1
      else arr[1] += 1
      return arr
    }, [0, 0])
    return arr[0] > arr[1]
  }