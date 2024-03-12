function factorilCalculator(num1, num2) {
    function factorial(number) {
        let result = 1;
        for (let i = 1; i <= number; i++) {
            result *= i;
        }
        return result
    }

    const output = factorial(num1) / factorial(num2);
    console.log(output.toFixed(2));
}

 factorial(0, 2)
 factorial(1, 2)
 factorial(2, 2)
 factorial(3, 2)
 factorial(4, 2)
 factorial(5, 2)
 factorial(6, 2)
 factorial(7, 2)