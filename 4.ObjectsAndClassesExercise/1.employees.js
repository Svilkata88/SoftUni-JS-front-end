function solve(inputArray) {
    let names = {};

    for ( let name of inputArray) {
        names[name] = name.length;

        console.log(`Name: ${name} -- Personal Number: ${names[name]}`)
    }
}

solve([
    'Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'
    ])