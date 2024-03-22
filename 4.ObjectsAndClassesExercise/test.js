const str = 'Java C# Php PHP Java PhP 3 C#3 1 5 C#'
const array = str.split(' ')
let newObj = [];

for (let el of array) {
    const obj = {}
    obj[el] = 0;
    newObj.push(obj)
}

for (let obj of newObj) {
    if (obj.hasOwnProperty('Php')) {
        console.log('YEs');
    }
}

//console.log(newObj)