let input = 10;



//let row1 = `**${num1}${num2}**`;
//let row2 = `*${num3}--${num4}*`;
//let row3 = `${num5}----${num6}`;

let helixSequence = 'ATCGTTAGGG';

helixAray = helixSequence.split('')

for (let i=0; i < input; i++) {
    
    let num1 = helixAray.shift();
    let num2 = helixAray.shift();
    const choices = [`**${num1}${num2}**`, `*${num1}--${num2}*`, `${num1}----${num2}`, `*${num1}--${num2}*`];

    console.log(choices[i % 4])

    helixAray.push(num1)
    helixAray.push(num2)

}


