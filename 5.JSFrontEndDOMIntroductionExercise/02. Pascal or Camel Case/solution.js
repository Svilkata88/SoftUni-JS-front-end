function solve() {
  const textInput = document.querySelector('form div #text');
  const typeInput = document.querySelector('form div #naming-convention');
  const resultOutput = document.querySelector('.result-container span')

  function pascalOrCamelCase(type) {
    const textInputWords = textInput.value.toLowerCase().split(' ');
    let result = '';

    switch(type) {
      case "Camel Case": 
        const tempResult = textInputWords
          .filter((word, index) => index > 0).map(word => {
              let w = '';
              w += word.charAt(0).toUpperCase()
              w += word.slice(1)
              return w
              })
          .join(''); 
         result = `${textInputWords[0]}${tempResult}`
        break;
      case "Pascal Case": 
        result = textInputWords.map(word => {
              let w = '';
              w += word.charAt(0).toUpperCase()
              w += word.slice(1)
              return w
          })
          .join(''); 
          break;
      default: 
        result = 'Error!'
    }

    return result
  }

  resultOutput.textContent = pascalOrCamelCase(typeInput.value)
}