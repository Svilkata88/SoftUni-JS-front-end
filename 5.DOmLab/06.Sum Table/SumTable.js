function sumTable() {
    const trElements = document.querySelectorAll('table tr');
    let resultList = [];

    for (let i=1; i < trElements.length - 1; i++) {
        const num = trElements[i].children[1].textContent
        resultList.push(Number(num))
    }

    const resultElement = document.getElementById('sum');
    resultElement.textContent = resultList.reduce((acc, num) => acc + num , 0)
    
    
}