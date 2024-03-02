function evenMinusOdd(arr) {
    const even = arr.filter((x) => x % 2 === 0)
    const odd = arr.filter((x) => x % 2 !== 0)
    evenSum = even.reduce((acc, x) => acc + x, 0)
    oddSum = odd.reduce((acc, y) => acc + y, 0)

    console.log(evenSum-oddSum)
}

evenMinusOdd([3,5,7,9])