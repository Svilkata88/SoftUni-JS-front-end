function loadingBar(number) {
    const rep = number / 10;

    let resultOne = '%'.repeat(rep).padEnd(10, '.');
    console.log()
    let resultTwo = number !== 100 ? `${number}% [${resultOne}]\nStill loading...` : `100% Complete!\n${number}% [${resultOne}]`
    console.log(resultTwo)
    
}

loadingBar(90)