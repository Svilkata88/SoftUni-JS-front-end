function search() {
   const towns = document.querySelectorAll('ul li');
   const searchedText = document.getElementById('searchText').value.toLowerCase();
   const resultText = document.getElementById('result');
   let counter = 0;

   for (let town of towns) {
      town.style.fontWeight = '';
      town.style.textDecoration = '';
   }

   for (let town of towns) {
      if (town.textContent.toLowerCase().includes(searchedText)) {
        town.style.fontWeight = 'bold';
        town.style.textDecoration = 'underline';
        counter ++
      }
   }

   resultText.textContent = `${counter} matches found`
}
