function simpleCalculator(num1, num2, operator) {
    let n1 = Number(num1);
    let n2 = Number(num2);
    let result = undefined;

    function print(result) {
        console.log(result)
    }

    switch(operator) {
        case 'multiply' : result = n1 * n2;
            break
        case 'divide' : result = n1 / n2;
            break
        case 'add' : result = n1 + n2;
            break
        case 'subtract' : result = n1 - n2;
            break
    }

    print(result)
}

simpleCalculator(5, 5, 'multiply')
simpleCalculator(40, 8,'divide')
simpleCalculator(12, 19, 'add')