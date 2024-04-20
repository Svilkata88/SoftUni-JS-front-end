const baseUrl = 'http://localhost:3030/jsonstore/tasks';
let currentID = null;
let edditedCourse = [];

// INPUT FIELDS
const titleInputElement = document.getElementById('course-name');
const typeInputElement = document.getElementById('course-type');
const descriptionInputElement = document.getElementById('description');
const teacherInputElement = document.getElementById('teacher-name');

// BUTTONS
const loadCoursesBtnElement = document.getElementById('load-course');
const addCourseBtnElement = document.getElementById('add-course');
addCourseBtnElement.type = 'button';
const editCourseBtnElement = document.getElementById('edit-course');
editCourseBtnElement.type = 'button';

// ADDING THE EVENT LISTENERS
loadCoursesBtnElement.addEventListener('click', loadCourses);
addCourseBtnElement.addEventListener('click', addCourse);
editCourseBtnElement.addEventListener('click', editCourseOnServer)

// GET MAIN DIV COURSES LIST ELEMENT 
const mainDivElement = document.getElementById('list');

async function loadCourses() {
    mainDivElement.innerHTML = '';

    const response = await fetch(baseUrl);
    const data = await response.json(); 
    visualizeCourses(data);

    editCourseBtnElement.setAttribute('disabled', 'disabled');

}

async function addCourse() {
    const title = titleInputElement.value;
    const type = typeInputElement.value;
    const description = descriptionInputElement.value;
    const teacher = teacherInputElement.value;

    clearInputs();

    const newCourse = {title, type, description, teacher};

    await fetch(baseUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newCourse),
    });

    const response = await fetch(baseUrl);
    const data = await response.json();
    visualizeCourses(data)
}

async function editCourseOnServer() { 
    mainDivElement.innerHTML = '';

    const title = titleInputElement.value;
    const teacher = teacherInputElement.value;
    const type = typeInputElement.value;
    const description = descriptionInputElement.value;

    const editedCourse = {
        title,
        teacher,
        type,
        description,
        _id: currentID,
    }

    fetch(`${baseUrl}/${currentID}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editedCourse),
    });  
    
    const response = await fetch(baseUrl);
    const data = await response.json();
    visualizeCourses(data);

    clearInputs();
    addCourseBtnElement.removeAttribute('disabled');
    editCourseBtnElement.setAttribute('disabled', 'disabled');
}  

function editCourseLocally() {
    const divCourseContainer = event.target.parentElement;
    const title = event.target.parentElement.children[0].textContent;
    const teacher = event.target.parentElement.children[1].textContent;
    const type = event.target.parentElement.children[2].textContent;
    const description = event.target.parentElement.children[3].textContent;
    currentID = event.target.parentElement.id;

    titleInputElement.value = title;
    teacherInputElement.value = teacher;
    typeInputElement.value = type;
    descriptionInputElement.value = description;
    
    divCourseContainer.remove();

    addCourseBtnElement.setAttribute('disabled', 'disabled');
    editCourseBtnElement.removeAttribute('disabled');
} 

function finishCourse() {
    const divCourseContainer = event.target.parentElement;
    currentID = event.target.parentElement.id;

    fetch(`${baseUrl}/${currentID}`, {
        method: 'DELETE',
    });  

    divCourseContainer.remove();
}

function createCourse(courseObj) {
    const id = courseObj['_id'];

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit Course';
    editBtn.classList.add('edit-btn');

    const finishBtn = document.createElement('button');
    finishBtn.textContent = 'Finish Course';
    finishBtn.classList.add('finish-btn');

    const h4 = document.createElement('h4');
    h4.textContent = `${courseObj.description}`;

    const h3one = document.createElement('h3');
    h3one.textContent = `${courseObj.teacher}`

    const h3two = document.createElement('h3');
    h3two.textContent = `${courseObj.type}`

    const h2 = document.createElement('h2');
    h2.textContent = `${courseObj.title}`

    const containerDivElement = document.createElement('div');
    containerDivElement.classList.add('container');
    containerDivElement.appendChild(h2);
    containerDivElement.appendChild(h3one);
    containerDivElement.appendChild(h3two);
    containerDivElement.appendChild(h4);
    containerDivElement.appendChild(editBtn);
    containerDivElement.appendChild(finishBtn);
    containerDivElement.setAttribute('id', `${id}`)

    const mainDivElement = document.getElementById('list');
    mainDivElement.appendChild(containerDivElement);

    editBtn.addEventListener('click', editCourseLocally);
    finishBtn.addEventListener('click', finishCourse);
}

function clearInputs() {
    const titleInputElement = document.getElementById('course-name');
    const typeInputElement = document.getElementById('course-type');
    const descriptionInputElement = document.getElementById('description');
    const teacherInputElement = document.getElementById('teacher-name');

    titleInputElement.value = '';
    typeInputElement.value = '';
    descriptionInputElement.value = '';
    teacherInputElement.value = '';
}

function visualizeCourses(data) {
    Object
        .values(data)
        .forEach(el => createCourse(el))
}