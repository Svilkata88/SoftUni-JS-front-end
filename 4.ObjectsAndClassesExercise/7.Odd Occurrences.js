function oddOccurrences(strInput) {
    const words = strInput.split(' ').map(el => el.toLowerCase())
    let objWords = {};

    words
        .map(word => {
            if (!objWords.hasOwnProperty(word)) {
                objWords[word] = 0;
            }
            objWords[word] ++ ;
        })
    
    result = Object.keys(objWords).filter(element => objWords[element] % 2 !==0)
    console.log(result.join(' '))
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')