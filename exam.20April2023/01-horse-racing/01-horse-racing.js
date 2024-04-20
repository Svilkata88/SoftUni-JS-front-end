function horseRacing(inputList) {
    let horsePositions = inputList.shift();
    horsePositions = horsePositions.split('|');

    line = inputList.shift();
    let [command, ...rest] = line.split(' ');
    while (command !== 'Finish') {

        switch(command) {
            case 'Retake':
                const [overtaker, overtaken] = rest;
                const overtakerIndex = horsePositions.indexOf(overtaker);
                const overtakenIndex = horsePositions.indexOf(overtaken);
                if (Number(overtakerIndex) < Number(overtakenIndex)) {
                    [horsePositions[overtakerIndex], horsePositions[overtakenIndex]] = [horsePositions[overtakenIndex], horsePositions[overtakerIndex]];
                    console.log(`${overtaker} retakes ${overtaken}.`)
                }
                break;
            case 'Trouble':
                const [horseName] = rest;
                let horseNameIndex = horsePositions.indexOf(horseName);
                if (horseNameIndex > 0) {
                    [horsePositions[horseNameIndex - 1], horsePositions[horseNameIndex]] = [horsePositions[horseNameIndex], horsePositions[horseNameIndex - 1]];
                    console.log(`Trouble for ${horseName} - drops one position.`)
                }
                break;
            case 'Rage': // вместо да се суапват трябва коня на определеният индекс да мине с две позиции напред.
                const [rageHorseName] = rest;
                let rageHorseIndex = horsePositions.indexOf(rageHorseName);
                
                if (rageHorseIndex !== horsePositions.length-1) {
                    if (rageHorseIndex === horsePositions.length-2) {
                        [horsePositions[rageHorseIndex+1], horsePositions[rageHorseIndex]] = [horsePositions[rageHorseIndex], horsePositions[rageHorseIndex+1]]
                    } else {
                        horsePositions.splice(rageHorseIndex, 1);
                        horsePositions.splice(rageHorseIndex+2, 0, rageHorseName );
                        
                    }
                }
                console.log(`${rageHorseName} rages 2 positions ahead.`);
                break;
            case 'Miracle':
                horsePositions.push(horsePositions.shift())
                console.log(`What a miracle - ${horsePositions[horsePositions.length-1]} becomes first.`)
                break;
            
        }
        line = inputList.shift();
        [command, ...rest] = line.split(' ');   
    }
    console.log(horsePositions.join('->'))
    console.log(`The winner is: ${horsePositions[horsePositions.length-1]}`)
}

horseRacing(
    ['Bella|Alexia|Sugar',
    'Retake Alexia Sugar',
    'Rage Bella',
    'Trouble Bella',
    'Finish']
)

console.log('--------------------')

horseRacing(
    ['Onyx|Domino|Sugar|Fiona',
    'Trouble Onyx',
    'Retake Onyx Sugar',
    'Rage Domino',
    'Miracle',
    'Finish']
)

