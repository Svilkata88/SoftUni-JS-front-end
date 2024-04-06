function create(words) {
   words
      .forEach(el => {
         const newDiv = document.createElement('div');
         const newParagraph = document.createElement('p');
         const div = document.getElementById('content');
         newParagraph.textContent = el;
         newParagraph.style.display = 'none'
         newDiv.appendChild(newParagraph);
         div.appendChild(newDiv)

         newDiv.addEventListener('click', (e) => {
            console.log(e.target.children[0].style.display = 'block' )
         })

      })
}