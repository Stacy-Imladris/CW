const last = (x) => x.split(' ').sort((a, b) => a[a.length - 1] > b[b.length - 1] 
                                      ? 1 : a[a.length - 1] < b[b.length - 1] ? -1 : 0)