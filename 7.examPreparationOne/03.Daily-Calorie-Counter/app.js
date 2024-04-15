const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

const mealsList = document.getElementById('list');
const loadMealsBtn = document.getElementById('load-meals');
const addMealBtn = document.getElementById('add-meal');
const editMealBtn = document.getElementById('edit-meal');

let currentID = '';
mealsList.innerHTML = '';

loadMealsBtn.addEventListener('click', () => {
    mealsList.innerHTML = ''; 
    const fetchPromise = fetch(baseUrl)
        .then(Response => Response.json()) // receiving the response promise and turing it into objects
        .then(data => Object.entries(data) // turning received data object into key value pairs list
        .forEach(kvp => createMeal(kvp[0], kvp[1]))) // taking values ( which are objects ) and creating DOM meals elements from them
    
})

addMealBtn.addEventListener('click', () => {
    const food = document.getElementById('food');
    const time = document.getElementById('time');
    const calories = document.getElementById('calories');

    const newData = {
        food: food.value,
        time: time.value,
        calories: calories.value,
    }

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(() => {
        // Fetch the updated list of meals after the POST request is completed
        return fetch(baseUrl);
    })
    .then(response => response.json())
    .then(data => Object.entries(data)
        .forEach(kvp => createMeal(kvp[0], kvp[1])))


    mealsList.innerHTML = ''; 
    clearInputs()
})

editMealBtn.addEventListener('click', () => {
    mealsList.innerHTML = '';
    const food = document.getElementById('food');
    const time = document.getElementById('time');
    const calories = document.getElementById('calories');

    const newData = {
        food: food.value,
        time: time.value,
        calories: calories.value,
        id: currentID,
    }

    fetch(`${baseUrl}/${currentID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(() => {
        // Fetch the updated list of meals after the POST request is completed
        return fetch(baseUrl);
    })
    .then(response => response.json())
    .then(data => Object.entries(data)
        .forEach(kvp => createMeal(kvp[0], kvp[1])))

    clearInputs();
    editMealBtn.setAttribute('disabled', 'disabled');
    addMealBtn.removeAttribute('disabled');
})

function createMeal(id, dataObj) {

    const changeMealBtn = document.createElement('button');
    changeMealBtn.className = 'change-meal';
    changeMealBtn.textContent = 'Change';

    const deleteMealBtn = document.createElement('button');
    deleteMealBtn.className = 'delete-meal';
    deleteMealBtn.textContent = 'Delete';

    const mealButtonsDiv = document.createElement('div');
    mealButtonsDiv.id = 'meal-buttons';
    mealButtonsDiv.appendChild(changeMealBtn);
    mealButtonsDiv.appendChild(deleteMealBtn);

    const h2 = document.createElement('h2');
    h2.textContent = `${dataObj.food}`;

    const h3One = document.createElement('h3');
    h3One.textContent = `${dataObj.time}`;

    const h3Two = document.createElement('h3');
    h3Two.textContent = `${dataObj.calories}`

    const mealDiv = document.createElement('div');
    mealDiv.className = 'meal';
    mealDiv.appendChild(h2);
    mealDiv.appendChild(h3One);
    mealDiv.appendChild(h3Two);
    mealDiv.appendChild(mealButtonsDiv);

    mealsList.appendChild(mealDiv);

    changeMealBtn.addEventListener('click', () => {
        const food = document.getElementById('food');
        const time = document.getElementById('time');
        const calories = document.getElementById('calories');

        mealDiv.remove();

        food.value = h2.textContent;
        time.value = h3One.textContent;
        calories.value = h3Two.textContent;

        addMealBtn.setAttribute('disabled', 'disabled');
        editMealBtn.removeAttribute('disabled');
        currentID = id;
    })

    deleteMealBtn.addEventListener('click', (e) => {
        currentID = id;

        fetch(`${baseUrl}/${currentID}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        
        mealDiv.remove();
    })

};

function clearInputs() {
    const food = document.getElementById('food');
    const time = document.getElementById('time');
    const calories = document.getElementById('calories');

    food.value = '';
    time.value = '';
    calories.value = '';
};