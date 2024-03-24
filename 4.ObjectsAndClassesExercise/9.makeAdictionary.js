function dictionary(JasonStringArray) {
    let obj = {};
    
    let result = JasonStringArray
        .map(el => JSON.parse(el))
        .map(el => {
            const Term = Object.keys(el)[0];
            const Definition = el[Term];
            obj[Term] = Definition;
        })
    

    Object.keys(obj).sort((a, b) => a.localeCompare(b)).forEach(el => console.log(`Term: ${el} => Definition: ${obj[el]}`))
}


dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}', 
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
])
