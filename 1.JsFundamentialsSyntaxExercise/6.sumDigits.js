function sumDigits(n) {
    let sum = 0;
    n = String(n).split('')
    for (number in n) {
        sum += Number(n[number]) 
    }
    console.log(sum)
}

sumDigits(97561)


