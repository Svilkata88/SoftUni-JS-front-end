function printChars(char1, char2) {
    const indexChar1 = char1.charCodeAt(0);
    const indexChar2 = char2.charCodeAt(0);
    const lower = indexChar1 < indexChar2 ? indexChar1 : indexChar2
    const bigger = indexChar1 > indexChar2 ? indexChar1 : indexChar2
    let resultString = [];

    for (let i=lower + 1; i < bigger; i++) {
        resultString.push(String.fromCharCode(i))
    }
    console.log(resultString.join(' '))
}




// console.log(String.fromCharCode(54))
// console.log('a'.charCodeAt(0))

//printChars('a', 'd')
//printChars('#', ':')
printChars('C', '#')
