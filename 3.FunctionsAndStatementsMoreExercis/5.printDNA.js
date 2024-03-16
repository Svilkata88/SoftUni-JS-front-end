function dnaHellix(len) {
    let helixSequence = 'ATCGTTAGGG';
    helixAray = helixSequence.split('')
    
    for (let i=0; i < len; i++) {    
        let num1 = helixAray.shift();
        let num2 = helixAray.shift();
        const choices = [`**${num1}${num2}**`, `*${num1}--${num2}*`, `${num1}----${num2}`, `*${num1}--${num2}*`];
        
        console.log(choices[i % 4])

        helixAray.push(num1)
        helixAray.push(num2)
    }
}

dnaHellix(4);
dnaHellix(10);
