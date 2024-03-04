function modernTimes(text) {
    const newText = text.split(' ');
    const specialWords = [];
    const re = /^#[a-zA-Z]+$/;

    for (word of newText) {
        if (re.test(word)) {
            specialWords.push(word.slice(1))
        }
    }

    specialWords.map((word) => console.log(word))
}

modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')