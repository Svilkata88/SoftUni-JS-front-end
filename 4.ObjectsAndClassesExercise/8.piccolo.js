function piccolo(carsArray) {
    let parking = [];

    carsArray   
        .forEach(element => {
            const [direction, carNumber] = element.split(', ')
           // isIn = parking.find(number => number === carNumber);
            if (direction === 'IN') {
                if (!parking.some(el => el === carNumber)) {
                    parking.push(carNumber)
                }
            } else if (direction === 'OUT') {
                if (parking.some(el => el === carNumber)) {
                    parking = parking.filter(el => el !== carNumber);
                }
            }
        })
        
    parking.sort((a, b) => a.localeCompare(b)).forEach(el => console.log(el))      
}

piccolo(['IN, CA2844AA', 
'IN, CA1234TA', 
'OUT, CA2844AA', 
'IN, CA9999TT', 
'IN, CA2866HI', 
'OUT, CA1234TA', 
'IN, CA2844AA', 
'OUT, CA2866HI', 
'IN, CA9876HH', 
'IN, CA2822UU'])

piccolo([
'IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'
])
