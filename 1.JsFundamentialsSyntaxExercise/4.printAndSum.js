function printAndSum(num1, num2) {
    let sum = 0;
    let loopString = '';

    for (let i=num1; i <= num2; i++) {
        sum += i  
        if (i!==num2) {
            loopString += `${i} `;
        } else {
            loopString += `${i}`;
        }
    }
    console.log(loopString)
    console.log(`Sum: ${sum}`)
}

printAndSum(5, 20)