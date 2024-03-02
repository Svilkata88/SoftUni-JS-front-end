function reveresedArray(n, arr) {
    let reversed = arr.slice(0, n).reverse()
    console.log(reversed.join(' '))
}

reveresedArray(2, [66, 43, 75, 89, 47])
reveresedArray(4, [-1, 20, 99, 5])