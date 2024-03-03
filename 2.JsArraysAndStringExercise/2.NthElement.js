function nthElement(arr, n) {
    let newArr = [];

    for (let i=0; i < arr.length; i++) {
    
        if (i % n === 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

nthElement(['5', '20', '31', '4', '20'], 2)