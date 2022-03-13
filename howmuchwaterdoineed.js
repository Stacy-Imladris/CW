const howMuchWater = (water, load, clothes) => clothes / 2 - load > 0 
? 'Too much clothes' : clothes < load ? 'Not enough clothes' 
: +(water * Math.pow(1.1, (clothes - load))).toFixed(2)