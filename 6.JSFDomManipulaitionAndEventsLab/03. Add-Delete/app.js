function addItem() {
    const inputTextElemenet = document.querySelector('main input[type=text]');
    const ulElement = document.querySelector('main ul');

    const newLiElement = document.createElement('li');
    newLiElement.textContent = inputTextElemenet.value;
    ulElement.appendChild(newLiElement);

    const deleteButton = document.createElement('a');
    deleteButton.href = '#';
    deleteButton.textContent = '[Delete]';
    deleteButton.addEventListener('click',  ()  => newLiElement.remove())

    newLiElement.appendChild(deleteButton);
}