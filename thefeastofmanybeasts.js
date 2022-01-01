const feast = (beast, dish) => {
    let arr1 = beast.split('')
    let arr2 = dish.split('')
    return arr1[0] === arr2[0] && arr1[arr1.length - 1] === arr2[arr2.length - 1]
    }