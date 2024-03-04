function pascalCaseSplitter(text) {
    const re = /[A-Z][a-z]*/g
    const found = text.match(re)

    console.log(found.join(', '))
}

pascalCaseSplitter('ThisIsSoAnnoyingToDo')