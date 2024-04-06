function addItem() {
    const textInputEl = document.getElementById('newItemText');
    const valueInputEl = document.getElementById('newItemValue');
    const btnEl = document.querySelector('article input[type=button]');
    const menu = document.getElementById('menu');
    const newEl = document.createElement('option');

    newEl.value = valueInputEl.value;
    newEl.textContent = textInputEl.value;
    menu.appendChild(newEl);
        console.log(newEl);

    valueInputEl.value = '';
    textInputEl.value = '';
    
}