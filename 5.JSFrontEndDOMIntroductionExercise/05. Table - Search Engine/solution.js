function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      // getting td elements
      const textFields = document.querySelectorAll('tbody tr td');

      // clear all elements classes 
      Array.from(textFields).map( field => {
         field.parentElement.className = '';
      })

      // getting input field value!
      const searchedText = document.getElementById('searchField');

      // checking for a match and putting the select class on the elements with a match
      Array.from(textFields).map( field => {
         if (field.textContent.toLowerCase().includes(searchedText.value.toLowerCase()) && searchedText.value) {
            field.parentElement.className = 'select';
         }
      })
      
      // clearing the field after input is passed!
      searchedText.value = '';
   }
}