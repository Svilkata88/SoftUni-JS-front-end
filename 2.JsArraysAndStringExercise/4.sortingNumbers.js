function solve(arr) {
    let newArr = [];
    const arr1 = [...arr].sort((a, b) => a - b);
    const arr2 = [...arr].sort((a, b) => b - a)

    for (let i=0; i<arr.length; i++) {
        if(i % 2 === 0) {
           newArr.push(Number(arr1.shift()))
        } else {
           newArr.push(Number(arr2.shift())) 
        }
    }
    return newArr
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])

