function generateReport() {
    const tableHeadElements = document.querySelectorAll('table thead tr th');
    const tableRowsElements = document.querySelectorAll('table tbody tr');
    const outputElement = document.getElementById('output');

    const columns = Array
        .from(tableHeadElements)
        .map((thElement) => {
            const isChecked = thElement.querySelector('input').checked;
            const column =  {
                columnName: thElement.textContent.toLowerCase().trim(),
                active: isChecked,
            };
            return column;
        })
    
    const data = Array
        .from(tableRowsElements)
        .map(trEl => {
            const tdElements = trEl.querySelectorAll('td')
            return Array.from(tdElements)
                .reduce((result, column, index) => {
                    if (!columns[index].active) {
                        return result;
                    }
                    const colName = columns[index].columnName;
                    result[colName] = column.textContent;
                    return result;
                }, {})  
        })

        outputElement.value = JSON.stringify(data, null, 2);
}