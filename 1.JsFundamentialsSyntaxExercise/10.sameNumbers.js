function sameNumbers(number) {
    n = String(number)
    condition = true
    sum = null

    for (let i = 0; i < n.length; i++) {
        if (i > 0 && n[i]!==n[i-1]) {
            condition = false
        }
       sum += Number(n[i])
    }
    console.log(condition)
    console.log(sum)
}

sameNumbers(1234)