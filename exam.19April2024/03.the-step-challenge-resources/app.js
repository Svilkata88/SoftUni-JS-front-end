const baseUrl = 'http://localhost:3030/jsonstore/records';

// BUTTONS ELEMENTS
const loadRecordsBtnEl = document.getElementById('load-records');
const addRecordsBtnEl = document.getElementById('add-record');
const editRecordsBtnEl = document.getElementById('edit-record');

//INPUT ELEMENTS
const nameInputEl = document.getElementById('p-name');
const stepsInputEl = document.getElementById('steps');
const caloriesInputEl = document.getElementById('calories');

//DOM lit element
const listDomElement = document.getElementById('list');

//clear DOm at the start
listDomElement.innerHTML = '';

//ID for change element
let _id = null;

// load existing records in the database
loadRecordsBtnEl.addEventListener('click', async () => {
    listDomElement.innerHTML = '';

    const response = await fetch(baseUrl);
    data = await response.json();
    Object.values(data).forEach(el => createElement(el));

    clearInputs();
    editRecordsBtnEl.setAttribute('disabled', 'disabled');
})

// add new record in the database
addRecordsBtnEl.addEventListener('click', async () => {
    const nameInputEl = document.getElementById('p-name');
    const stepsInputEl = document.getElementById('steps');
    const caloriesInputEl = document.getElementById('calories');

    const name = nameInputEl.value;
    const steps = stepsInputEl.value;
    const calories = caloriesInputEl.value;

    listDomElement.innerHTML = '';
    clearInputs();

    const newRecord = {name, steps, calories};
    await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type':'application/json',
        },
        body: JSON.stringify(newRecord),
    })

    const response = await fetch(baseUrl);
    data = await response.json();
    Object.values(data).forEach(el => createElement(el));
})

// change existing record in the database
editRecordsBtnEl.addEventListener('click', async () => {
    const name = nameInputEl.value;
    const steps = stepsInputEl.value;
    const calories = caloriesInputEl.value;

    const newRecord = {name, steps, calories, _id};
    await fetch(`${baseUrl}/${_id}`, {
        method: 'PUT',
        headers: {
            'Content-type':'application/json',
        },
        body: JSON.stringify(newRecord),
    })

    listDomElement.innerHTML = '';

    const response = await fetch(baseUrl);
    data = await response.json();
    Object.values(data).forEach(el => createElement(el));

    clearInputs();

})

// create dom element for every record in the database
function createElement(obj) {
    const changeBtn = document.createElement('button');
    changeBtn.classList.add('change-btn');
    changeBtn.textContent = 'Change';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';

    const btnDivElement = document.createElement('div');
    btnDivElement.className = 'btn-wrapper';
    btnDivElement.appendChild(changeBtn);
    btnDivElement.appendChild(deleteBtn);

    const p1 = document.createElement('p');
    p1.textContent = obj.name;

    const p2 = document.createElement('p');
    p2.textContent = obj.steps;

    const p3 = document.createElement('p');
    p3.textContent = obj.calories;

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info')
    infoDiv.appendChild(p1);
    infoDiv.appendChild(p2);
    infoDiv.appendChild(p3);

    const liElement = document.createElement('li');
    liElement.classList.add('record')
    liElement.appendChild(infoDiv);
    liElement.appendChild(btnDivElement);

    listDomElement.appendChild(liElement);

    changeBtn.addEventListener('click', () => {
        addRecordsBtnEl.setAttribute('disabled', 'disabled');
        editRecordsBtnEl.removeAttribute('disabled');

        liElement.remove();

        const nameInputEl = document.getElementById('p-name');
        const stepsInputEl = document.getElementById('steps');
        const caloriesInputEl = document.getElementById('calories');

        nameInputEl.value = obj.name;
        stepsInputEl.value = obj.steps;
        caloriesInputEl.value = obj.calories;
        _id = obj['_id'];
    })

    deleteBtn.addEventListener('click', async ()=> {
        _id = obj['_id'];

        await fetch(`${baseUrl}/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-type':'application/json',
            },
        })
        
        listDomElement.innerHTML = '';

        const response = await fetch(baseUrl);
        data = await response.json();
        Object.values(data).forEach(el => createElement(el));

    clearInputs();
    })
}

// clear input fields
function clearInputs() {
    const nameInputEl = document.getElementById('p-name');
    const stepsInputEl = document.getElementById('steps');
    const caloriesInputEl = document.getElementById('calories');

    nameInputEl.value = '';
    stepsInputEl.value = '';
    caloriesInputEl.value = '';
}