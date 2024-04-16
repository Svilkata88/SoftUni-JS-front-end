const baseUrl = 'http://localhost:3030/jsonstore/games';

const loadGamesBtn = document.getElementById('load-games');
const addGamesBtn = document.getElementById('add-game');
const editGamesBtn = document.getElementById('edit-game');
let currentID = null;

const gameListDiv = document.getElementById('games-list');
gameListDiv.innerHTML = '';

loadGamesBtn.addEventListener('click', visualise) 
    
addGamesBtn.addEventListener('click', async () => {
    
    const name = document.getElementById('g-name').value;
    const type = document.getElementById('type').value;
    const players = document.getElementById('players').value;

    const newData = {name, type, players};
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type':'application/json',
        },
        body: JSON.stringify(newData)
    })

    clearInputs();
    visualise();
})

editGamesBtn.addEventListener('click', () => {
    const name = document.getElementById('g-name').value;
    const type = document.getElementById('type').value;
    const players = document.getElementById('players').value;

    const newData = {name, type, players, _id: currentID};
        fetch(`${baseUrl}/${currentID}`, {
            method: 'PUT',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify(newData)
        })
           
        clearInputs();
        gameListDiv.innerHTML = '';
        visualise();
        currentID = null;
})

function renderGame(gameObject) {
    clearInputs();

    const name = gameObject.name;
    const players = gameObject.players;
    const type = gameObject.type;
    const id = gameObject['_id'];

    const changeBtn = document.createElement('button');
    changeBtn.textContent = 'Change';
    changeBtn.className = 'change-btn';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    const divButtonsContainer = document.createElement('div');
    divButtonsContainer.className = 'buttons-container';
    divButtonsContainer.appendChild(changeBtn);
    divButtonsContainer.appendChild(deleteBtn);

    const p1 = document.createElement('p');
    p1.textContent = `${name}`;

    const p2 = document.createElement('p');
    p2.textContent = `${players}`;

    const p3 = document.createElement('p');
    p3.textContent = `${type}`;

    const divPContainer = document.createElement('div');
    divPContainer.className = 'content';
    divPContainer.appendChild(p1);
    divPContainer.appendChild(p2);
    divPContainer.appendChild(p3);

    const boardGameDivContainer = document.createElement('div'); // main dynamic div which will be removed / added
    boardGameDivContainer.className = 'board-game';
    boardGameDivContainer.appendChild(divPContainer);
    boardGameDivContainer.appendChild(divButtonsContainer);
    
    const gameListDiv = document.getElementById('games-list');
    gameListDiv.appendChild(boardGameDivContainer);

    deleteBtn.addEventListener('click', async () => {
         await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
        })
        visualise();
    })

    changeBtn.addEventListener('click', async () => {
        boardGameDivContainer.remove();
        currentID = id;
        let nameInputField = document.getElementById('g-name');
        let typeInputField = document.getElementById('type');
        let playersInputField = document.getElementById('players');

        nameInputField.value = name;
        typeInputField.value = type;
        playersInputField.value = players;

        editGamesBtn.removeAttribute('disabled');
        addGamesBtn.setAttribute('disabled', 'disabled');
    })
}

async function visualise() {
    gameListDiv.innerHTML = '';

    const response = await fetch(baseUrl);
    const data = await response.json();

    Object
        .values(data)
        .forEach(el => {
            renderGame(el)
            console.log(el)
        });
    
    editGamesBtn.setAttribute('disabled', 'disabled');
    addGamesBtn.removeAttribute('disabled');
}

function clearInputs() {
    const name = document.getElementById('g-name').value = '';
    const type = document.getElementById('type').value = '';
    const players = document.getElementById('players').value = '';
}