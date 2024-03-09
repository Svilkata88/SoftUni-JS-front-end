function solve(number) {

    const numbers = number.toString().split('').map(x => Number(x));
    let evenNumsSum = numbers.filter(x => x % 2 === 0).reduce((acc, n) => acc + n, 0);
    let oddNumsSum = numbers.filter(x => x % 2 !== 0).reduce((acc, n) => acc + n, 0);
    
    console.log(`Odd sum = ${oddNumsSum}, Even sum = ${evenNumsSum}`)
}


solve(1000435)
solve(3495892137259234)