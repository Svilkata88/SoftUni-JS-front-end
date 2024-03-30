function solve() {
  const text = document.getElementById('input');
  const sentences = text.value.split('.').filter(el => el);
  let outputElement = document.getElementById('output')
  let tempParagraphSentence = [];
  let tempSentence = [];

  const result = sentences
    .map((sentence, index) => {
      tempSentence.push(sentence.trim())
      if (tempSentence.length % 3 === 0 || index === sentences.length - 1) {
        tempParagraphSentence.push(`<p>${tempSentence.join('. ')}.</p>`);
        tempSentence = [];
    }
    
  })

  outputElement.innerHTML = tempParagraphSentence.join('\n')
}