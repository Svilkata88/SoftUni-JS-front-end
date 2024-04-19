window.addEventListener("load", solve);

function solve() {
    const typeOfAnimalElement = document.getElementById('type');
    const ageElement = document.getElementById('age');
    const genderElement = document.getElementById('gender');

    const adobtBtnElement = document.getElementById('adopt-btn');
    adobtBtnElement.type = 'button';

    adobtBtnElement.addEventListener('click', () => {

        const inputData = [typeOfAnimalElement.value, ageElement.value, genderElement.value];
        const anyEmptyField = inputData.some(el => !el)

        if (!anyEmptyField) { 
            addoptPet(typeOfAnimalElement.value, ageElement.value, genderElement.value);
            clearInputs();
        }
    })

    function clearInputs() {
        const typeOfAnimalElement = document.getElementById('type');
        const ageElement = document.getElementById('age');
        const genderElement = document.getElementById('gender');
        
        typeOfAnimalElement.value = '';
        ageElement.value = '';
        genderElement.value = '';
    }

    function addoptPet(type, age, gender) {
        const ulListElement = document.getElementById('adoption-info');

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';

        const doneBtn = document.createElement('button');
        doneBtn.classList.add('done-btn');
        doneBtn.textContent = 'Done';

        const btnDivElement = document.createElement('div');
        btnDivElement.className = 'buttons';
        btnDivElement.appendChild(editBtn);
        btnDivElement.appendChild(doneBtn);

        const p1 = document.createElement('p');
        p1.textContent = `Pet:${type}`;

        const p2 = document.createElement('p');
        p2.textContent = `Gender:${gender}`;

        const p3 = document.createElement('p');
        p3.textContent = `Age:${age}`;

        const article = document.createElement('article');
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);

        const liElement = document.createElement('li');
        liElement.appendChild(article);
        liElement.appendChild(btnDivElement);

        ulListElement.appendChild(liElement);

        editBtn.addEventListener('click', () => {
            const typeOfAnimalElement = document.getElementById('type');
            const ageElement = document.getElementById('age');
            const genderElement = document.getElementById('gender');

            typeOfAnimalElement.value = type
            ageElement.value = age
            genderElement.value = gender

            liElement.remove()
        })

        doneBtn.addEventListener('click', () => {
            editBtn.remove();
            doneBtn.remove();
            liElement.remove();

            const addoptedPetsElement = document.getElementById('adopted-list');

            const clearBtn = document.createElement('button');
            clearBtn.classList.add('clear-btn');
            clearBtn.textContent = 'Clear';

            liElement.appendChild(clearBtn);
            addoptedPetsElement.appendChild(liElement)

            clearBtn.addEventListener('click', () => {
                liElement.remove();
            })
        })
    }
}
  