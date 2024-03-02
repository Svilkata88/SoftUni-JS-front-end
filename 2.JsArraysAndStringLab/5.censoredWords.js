function censoredWords(text, word) {
    let i = text.indexOf(word)
        while (i>=0) {
            text = text.replace(word, '*'.repeat(word.length))
            i = text.indexOf(word)
        }

    console.log(text)
}


censoredWords('A small sentence with some words', 'small')
censoredWords('Find the hidden word hidden', 'hidden')