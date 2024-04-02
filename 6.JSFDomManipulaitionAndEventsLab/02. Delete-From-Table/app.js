function deleteByEmail() {
    const inputField = document.querySelector('label input');
    const rowElements = document.querySelectorAll('table tbody tr');
    const textOutput = document.getElementById('result');

    Array
        .from(rowElements)
        .map(row => {
            const tdElement = row.querySelector('td:nth-of-type(2)');
            if (tdElement.textContent === inputField.value && inputField.value) {
                row.remove();
                textOutput.textContent = 'Deleted.'
            } else { textOutput.textContent = 'Not found.' }  
        })
}