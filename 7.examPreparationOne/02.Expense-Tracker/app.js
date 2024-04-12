window.addEventListener("load", solve);

function solve() {
    const expenceTypeInputEl = document.getElementById('expense');
    const amountInputEl = document.getElementById('amount');
    const dateInputEl = document.getElementById('date');

    const previewElement = document.getElementById('preview-list');
    const expenseElement = document.getElementById('expenses-list');

    const addBtnEl = document.getElementById('add-btn');
    const deleteExpensesBtn = document.querySelector('.btn.delete');
  

    addBtnEl.addEventListener('click', () => {
        const expenseType = expenceTypeInputEl.value;
        const amount = amountInputEl.value;
        const date = dateInputEl.value;

        const inputData = [expenseType, amount, date];
        const anyEmptyField = inputData.some(el => !el)

        if (!anyEmptyField) { 
            addToPreview(expenseType, amount, date)
            addBtnEl.setAttribute('disabled', 'disabled');
            clearInput();
        }
    })

    deleteExpensesBtn.addEventListener('click', () => {
        location.reload();
    })

    function addToPreview(expenceType, amount, date) {

        const editBtn = document.createElement('button');
        editBtn.classList.add('btn', 'edit');
        editBtn.textContent = 'edit';

        const okBtn = document.createElement('button');
        okBtn.classList.add('btn', 'ok');
        okBtn.textContent = 'ok';

        const btnDivElement = document.createElement('div');
        btnDivElement.className = 'buttons';
        btnDivElement.appendChild(editBtn);
        btnDivElement.appendChild(okBtn);

        const p1 = document.createElement('p');
        p1.textContent = `Type: ${expenceType}`;

        const p2 = document.createElement('p');
        p2.textContent = `Amount: ${amount}$`;

        const p3 = document.createElement('p');
        p3.textContent = `Date: ${date}`;

        const article = document.createElement('article');
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);

        const liElement = document.createElement('li');4
        liElement.className = 'expense-item';
        liElement.appendChild(article);
        liElement.appendChild(btnDivElement);

        previewElement.appendChild(liElement);

        editBtn.addEventListener('click', () => {
            expenceTypeInputEl.value = expenceType;
            amountInputEl.value = amount;
            dateInputEl.value = date;

            liElement.remove();
            addBtnEl.removeAttribute('disabled');
        })

        okBtn.addEventListener('click', () => {
            const expensesElemenet = document.getElementById('expenses-list');
            btnDivElement.remove();
            
            liElement.remove();
            expensesElemenet.appendChild(liElement);
            addBtnEl.removeAttribute('disabled');
        })
    }

    function clearInput() {
        expenceTypeInputEl.value = '';
        amountInputEl.value = '';
        dateInputEl.value = '';
    }
}