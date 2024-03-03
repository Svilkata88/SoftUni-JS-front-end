function solve(text, word) {
    let counter = 0;
    textArr = text.split(' ')
    for (let w of textArr) {
        if (w === word) {counter++}
    }

    console.log(counter)
}

solve('This is a word and it also is a sentence', 'is')

solve('softuni is great place for learning new programming languages', 'softuni')