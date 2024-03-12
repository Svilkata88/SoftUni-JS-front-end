function stupidFunction(num1, num2, num3) {
    let sum = (a, b) => a + b;
    let substract = (a, b) => a - b;

    console.log(substract(sum(num1, num2), num3))
}

stupidFunction(23, 6, 10)
stupidFunction(1, 17, 30)