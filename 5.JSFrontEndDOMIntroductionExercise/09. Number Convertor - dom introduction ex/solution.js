function solve() {
    const selectToElement = document.getElementById('selectMenuTo');
    const optionOneSelectTo = document.querySelector('#selectMenuTo option');
    const optionTwoSelectionTo = document.createElement('option');
    const resultFieldElement = document.getElementById('result')
    const inputNumber = document.getElementById('input');
    const convertItBtnElement = document.querySelector('body div button')

    optionOneSelectTo.textContent = 'Binary';
    optionOneSelectTo.value = 'binary';
    optionTwoSelectionTo.textContent = 'Hexadecimal';
    optionTwoSelectionTo.value = 'hexadecimal';
    selectToElement.appendChild(optionTwoSelectionTo)


    function toBinary(number) {
        let result = '';
        while (number !== 0) {   
            result = String(number % 2) + result;
            number = Math.trunc(number / 2);
        }
        return result;
    }

    function toHexadecimal(number) {
        result = '';
        hex = {
            0: 2,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            10: 'A',
            11: 'B',
            12: 'C',
            13: 'D',
            14: 'E',
            15: 'F',
        }

        while (number !== 0) {   
            let hexNumber = number % 16;
            number = Math.trunc(number / 16);
            result = hex[hexNumber] + result;
        }
        return result;
    }

    convertItBtnElement.addEventListener('click', () => {
        resultFieldElement.value = selectToElement.value === 'binary' ? toBinary(inputNumber.value) : toHexadecimal(inputNumber.value);
    })
}