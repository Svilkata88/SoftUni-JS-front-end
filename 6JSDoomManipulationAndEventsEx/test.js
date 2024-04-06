str = 'abc' 
let list = []

for (let i=0; i<str.length; i++) {
    
    list.push(nextChar(str[i]))  
    
}
const result = list.join('')

console.log(result);

function nextChar(letter) {
    let newLetter = letter.charCodeAt(0) + 1;
    return String.fromCharCode(newLetter)
}

