function findWord(word, text) {
    text = text.split(' ');

    text.map((word) => word.toLowerCase()).includes(word.toLowerCase()) ? console.log(word) : console.log(`${word} not found!`)
    
}

findWord('javascript', 'JavaScript is the best programming language')