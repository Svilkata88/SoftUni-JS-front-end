function encodeAndDecodeMessages() {
    const inputTextArea = document.querySelector('main div textarea');
    const outputTextArea = document.querySelector('main div:nth-child(2) textarea');
    
    const encodeBtn = document.querySelector('main div button')
    const decodeBtn = document.querySelector('main div:nth-child(2) button')

    encodeBtn.addEventListener('click', () => {
        const textMessage = inputTextArea.value;
        inputTextArea.value = '';

        let list = [];
        for (let i=0; i<textMessage.length; i++) {
            list.push(nextChar(textMessage[i]))     
        }
        outputTextArea.value = list.join('')
    })

    decodeBtn.addEventListener('click', () => {
        const outputMessage = outputTextArea.value;
        let list = [];
        for (let i=0; i<outputMessage.length; i++) {
            list.push(previousChar(outputMessage[i]))     
        }
        outputTextArea.value = list.join('')
    })

    function nextChar(letter) {
        let newLetter = letter.charCodeAt(0) + 1;
        return String.fromCharCode(newLetter)
    }

    function previousChar(letter) {
        let newLetter = letter.charCodeAt(0) - 1;
        return String.fromCharCode(newLetter)
    } 
}