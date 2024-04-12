function cafeteria(inputList) {
    const nBaristas = Number(inputList.shift());
    let baristas = {};


    for (let i = 0; i < nBaristas; i++) {
        [name, shift, coffeeTypes] = inputList[i].split(' ');

        baristas[name] = {
            shift,
            coffeeTypes: coffeeTypes.split(',')
        }
    }

    const commandLines = inputList.slice(nBaristas);

    let line = commandLines.shift();
    while(line !== 'Closed') { 
        
        const [command, name, ...rest] = line.split(' / ');
        //console.log(command, shift, rest);
        switch(command) {
            case 'Prepare':
                const [currentShift, currentCoffeeType] = rest;
                if (currentShift === baristas[name].shift && baristas[name].coffeeTypes.includes(currentCoffeeType)) {
                    console.log(`${name} has prepared a ${currentCoffeeType} for you!`)
                } else {
                    console.log(`${name} is not available to prepare a ${currentCoffeeType}.`)
                }
                break
            case 'Change Shift':
                const newShift = rest[0];
                baristas[name].shift = newShift;
                console.log(`${name} has updated his shift to: ${newShift}`);
                break
            case 'Learn':
                const newCoffeeType = rest[0];
                if (baristas[name].coffeeTypes.includes(newCoffeeType)) {
                    console.log(`${name} knows how to make ${newCoffeeType}.`)
                } else {
                    baristas[name].coffeeTypes.push(newCoffeeType);
                    console.log(`${name} has learned a new coffee type: ${newCoffeeType}.`)
                }
                break
        }

        line = commandLines.shift();
    }

    for (const barista in baristas) {
        const ObjValue = baristas[barista]
        console.log(`Barista: ${barista}, Shift: ${ObjValue.shift}, Drinks: ${ObjValue.coffeeTypes.join(', ')}`)
    }
}


cafeteria([
    '3',
    
    'Alice day Espresso,Cappuccino', 
    'Bob night Latte,Mocha', 
    'Carol day Americano,Mocha',  
    'Prepare / Alice / day / Espresso', 
    'Change Shift / Bob / night', 
    'Learn / Carol / Latte', 
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte', 
    'Closed'
])

console.log('---------------------------------')

cafeteria([
'4',

'Alice day Espresso,Cappuccino',
'Bob night Latte,Mocha',
'Carol day Americano,Mocha',
'David night Espresso',
'Prepare / Alice / day / Espresso',
'Change Shift / Bob / day',
'Learn / Carol / Latte',
'Prepare / Bob / night / Latte',
'Learn / David / Cappuccino',
'Prepare / Carol / day / Cappuccino', 
'Change Shift / Alice / night', 
'Learn / Bob / Mocha', 
'Prepare / David / night / Espresso', 
'Closed'
])