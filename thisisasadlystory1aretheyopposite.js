const isOpposite = (s1,s2) => s1.toLowerCase() === s2.toLowerCase() && s1 
    ? s1.split('').every((e, i) => e !== s2.split('')[i]) : false