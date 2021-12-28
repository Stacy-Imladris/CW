function well(x){
    const good = x.filter(i => i === "good").length;
    return good > 2 ? 'I smell a series!' : good > 0 ? 'Publish!' : 'Fail!';
  }