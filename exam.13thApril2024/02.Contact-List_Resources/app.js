window.addEventListener("load", solve);

function solve() {

    const name = document.getElementById('name');
    const phoneNumber = document.getElementById('phone');
    const category = document.getElementById('category');

    const addBtn = document.getElementById('add-btn');

    addBtn.addEventListener('click', () => {
        const inputData = [name.value, phoneNumber.value, category.value];
        const anyEmptyField = inputData.some(el => !el)

        if (!anyEmptyField) { 
            createContact(name.value, phoneNumber.value, category.value);
            clearInputs();
        }
    })

    function createContact(name, phone, category) {
        const ulListElement = document.getElementById('check-list');
        const ulContactList = document.getElementById('contact-list');

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';

        const saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save';

        const btnDivElement = document.createElement('div');
        btnDivElement.className = 'buttons';
        btnDivElement.appendChild(editBtn);
        btnDivElement.appendChild(saveBtn);

        const p1 = document.createElement('p');
        p1.textContent = `name:${name}`;

        const p2 = document.createElement('p');
        p2.textContent = `phone:${phone}`;

        const p3 = document.createElement('p');
        p3.textContent = `category:${category}`;

        const article = document.createElement('article');
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);

        const liElement = document.createElement('li');
        liElement.appendChild(article);
        liElement.appendChild(btnDivElement);

        ulListElement.appendChild(liElement);

        editBtn.addEventListener('click', () => {
            const nameField = document.getElementById('name').value = name;
            const phoneNumberField = document.getElementById('phone').value = phone;
            const categoryField = document.getElementById('category').value = category;

            liElement.remove();
        })

        saveBtn.addEventListener('click', () => {
            liElement.remove();
            
            btnDivElement.remove();

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('del-btn')
            liElement.appendChild(deleteBtn);

            ulContactList.appendChild(liElement);

            deleteBtn.addEventListener('click', () => {
                liElement.remove();
            });
        })
    };

    function clearInputs() {
        const name = document.getElementById('name').value = '';
        const phoneNumber = document.getElementById('phone').value = '';
        const category = document.getElementById('category').value = '';
    };
}
  