const processData = (data) => data.map(m => m[0] - m[1]).reduce((acc, r) => acc * r)