function signChecker(...numbers) {
    let counter = 0;
    numbers = [...numbers];

    for (let number of numbers) {
        if(Number(number) < 0) {counter++}
    }

    counter % 2 === 0 ? console.log('Positive') : console.log('Negative')
}

signChecker(5, 12, -5)
signChecker(-6, -12, 14)
signChecker(-1, -2, -3)