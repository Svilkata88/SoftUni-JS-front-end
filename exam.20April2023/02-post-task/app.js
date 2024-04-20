window.addEventListener("load", solve);

function solve() {
    const taskTitleInputElement = document.getElementById('task-title');
    const taskCategoryInputElement = document.getElementById('task-category');
    const contentInputElement = document.getElementById('task-content');

    const publishBtnElement = document.getElementById('publish-btn');

    publishBtnElement.addEventListener('click', () => {
        createTask();
        clearInputs();
    })

    function isInputValid(taskTitle, taskCategory, taskContent) {
        const task = taskTitle.value;
        const category = taskCategory.value;
        const content = taskContent.value;

        const inputs = [task, category, content];
        if (inputs.some(el => !el)) {
            return false;
        }
        return true;
    }

    function createTask() {
        if (isInputValid(taskTitleInputElement, taskCategoryInputElement, contentInputElement)) {
            const task = taskTitleInputElement.value;
            const category = taskCategoryInputElement.value;
            const content = contentInputElement.value;

            const ulElement = document.getElementById('review-list');

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.classList.add('action-btn', 'edit');

            const postBtn = document.createElement('button');
            postBtn.textContent = 'Post';
            postBtn.classList.add('action-btn', 'post');

            const h4 = document.createElement('h4');
            h4.textContent = `${task}`;

            const p1 = document.createElement('p');
            p1.textContent = `Category: ${category}`;

            const p2 = document.createElement('p');
            p2.textContent = `Content: ${content}`;

            const article = document.createElement('article');
            article.appendChild(h4);
            article.appendChild(p1);
            article.appendChild(p2);

            const li = document.createElement('li');
            li.className = 'rpost';
            li.appendChild(article);
            li.appendChild(editBtn);
            li.appendChild(postBtn);

            ulElement.appendChild(li);

            editBtn.addEventListener('click', edit);
            postBtn.addEventListener('click', post);
        };
    }

    function edit(e) {
        const liElement = e.target.parentElement;
        liElement.remove();

        const h4 = liElement.children[0].children[0].textContent;
        const p1 = liElement.children[0].children[1].textContent.replace('Category: ', '')
        const p2 = liElement.children[0].children[2].textContent.replace('Content: ', '')

        taskTitleInputElement.value = h4;
        taskCategoryInputElement.value = p1;
        contentInputElement.value = p2;
    }

    function post(e) {
        const liElement = e.target.parentElement;
        const editBtn = e.target.parentElement.children[1];
        const postBtn = e.target.parentElement.children[2];
        liElement.remove();
        editBtn.remove();
        postBtn.remove();

        const publishedUlElement = document.getElementById('published-list');
        publishedUlElement.appendChild(liElement)
    }

    function clearInputs() {
        taskTitleInputElement.value = '';
        taskCategoryInputElement.value = '';
        contentInputElement.value = '';
    }
}