function extract(content) {
    const txt = document.getElementById(content);

    const reg = /\(([a-zA-Z ]+)\)/g
    const matches = txt.textContent.matchAll(reg)

    
    const newMatches = []
    for (let el of matches) {
        newMatches.push(el[1])
    }

    const text = newMatches.join('; ');
    return text
}