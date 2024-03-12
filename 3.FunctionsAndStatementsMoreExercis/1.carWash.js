function carWash(commands) {
    result = 0;

    for (let command of commands) {
        switch(command) {
            case 'soap':
                result += 10;
                break
            case 'water':
                result *= 1.2;
                break
            case 'vacuum cleaner':
                result *= 1.25;
                break
            case 'mud': 
                result *= 0.9;
                break 
        }
    }
    console.log(`The car is ${result.toFixed(2)}% clean.`)
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])