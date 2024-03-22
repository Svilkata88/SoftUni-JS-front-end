function wordTracker(arrayOfWords) {
    const searchedWords = arrayOfWords[0];
    let words = arrayOfWords.slice(1);
    let wordsArrayObj = [];


    searchedWords
        .split(' ')
        .map(word => {
            let objWord = {word, count:0}
            
            words
                .map(element => {
                    if (element === word) {objWord.count++}
                })
            wordsArrayObj.push(objWord)
        })
    
    wordsArrayObj
        .sort((a, b) => b.count - a.count)
        .map(word => console.log(`${word.word} - ${word.count}`))
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ])

wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence'
])