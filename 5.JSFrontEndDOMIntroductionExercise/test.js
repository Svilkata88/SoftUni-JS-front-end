let number = 123;


function toBinary(n) {
    let result = '';
    while (number !== 0) {   
        result = String(number % 2) + result;
        number = Math.trunc(number / 2);
    }
    return result
}

const a = toBinary(number)
console.log(a);
