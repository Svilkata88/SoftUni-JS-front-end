function revelWord(words, text) {
    searchedWords = words.split(', ');
    searchedText = text.split(' ');
    for (let i=0; i<searchedText.length; i++) {
        if (searchedText[i].startsWith('*')) {
            searchedText[i] = searchedText[i].replace('*'.repeat(searchedText[i].length), searchedWords.filter((word) => word.length === searchedText[i].length)[0])
        }
    }
    console.log(searchedText.join(' '))
}

revelWord('great', 'softuni is ***** place for learning new programming languages')
revelWord('great, learning', 'softuni is ***** place for ******** new programming languages')
