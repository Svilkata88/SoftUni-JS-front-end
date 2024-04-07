function solve() {
    const inputTextareaElement = document.querySelector('#exercise textarea');
    const outputTextareaElement = document.querySelector('#exercise textarea:last-of-type');
    const generateBtn = document.querySelector('#exercise button');
    const buyBtn = document.querySelector('#exercise button:last-of-type');

    
    generateBtn.addEventListener('click', () => {
        const inputData = JSON.parse(inputTextareaElement.value);
        
        Array
            .from(inputData)
            .forEach(el => {
                const tableTbodyElement = document.querySelector('table tbody');

                const img = el.img;
                const name = el.name;
                const price = el.price;
                const decFactor = el.decFactor;

                const tdImgElement  = document.createElement('td');
                const imgElement = document.createElement('img');
                imgElement.src = img;
                tdImgElement.appendChild(imgElement);

                const nameTdElement  = document.createElement('td');
                const namePElement = document.createElement('p');
                namePElement.textContent = name;
                nameTdElement.appendChild(namePElement);

                const priceTdElement  = document.createElement('td');
                const pricePElement = document.createElement('p');
                pricePElement.textContent = price;
                priceTdElement.appendChild(pricePElement);

                const decFactorTdlement  = document.createElement('td');
                const decFactorPElements = document.createElement('p');
                decFactorPElements.textContent = decFactor;
                decFactorTdlement.appendChild(decFactorPElements);

                const markTdElement = document.createElement('td');
                const markInputElement = document.createElement('input');
                markInputElement.type = 'checkbox';
                markTdElement.appendChild(markInputElement);

                const tableRowElement = document.createElement('tr');

                tableRowElement.appendChild(tdImgElement);
                tableRowElement.appendChild(nameTdElement);
                tableRowElement.appendChild(priceTdElement);
                tableRowElement.appendChild(decFactorTdlement);
                tableRowElement.appendChild(markTdElement);

                tableTbodyElement.appendChild(tableRowElement);
            })

    })

    buyBtn.addEventListener('click', () => {
        const tableTbodyElement = document.querySelectorAll('table tbody tr');
        let totalPrice = 0;
        let totalDecFactor = 0;
        let averageDecFactorLenght = 0;
        let boughtProducts = [];
        let resultOutput = '';

        Array
            .from(tableTbodyElement)
            .forEach(el => {
                const markElement = el.querySelector('td input[type=checkbox]');
                if (!markElement.checked) {
                    return
                }
                const name = el.querySelector('td:nth-child(2)').textContent;
                const price = Number(el.querySelector('td:nth-child(3)').textContent);
                const decFactor = Number(el.querySelector('td:nth-child(4)').textContent);
                
                boughtProducts.push(name);
                totalPrice += price;
                totalDecFactor += decFactor;
                averageDecFactorLenght++;
            })
        
        resultOutput += `Bought furniture: ${boughtProducts.join(', ')}\n`
        resultOutput += `Total price: ${totalPrice.toFixed(2)}\n`
        resultOutput += `Average decoration factor: ${totalDecFactor / averageDecFactorLenght}`

        outputTextareaElement.value = resultOutput;
    })
}