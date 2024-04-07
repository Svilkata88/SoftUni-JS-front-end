function solve() {

    const quickCheckBtnElement = document.querySelector('tfoot button');
    const clearkBtnElement = document.querySelector('tfoot button:nth-child(2)');

    //const textOutput = document.getElementById('check');
    //console.log(textOutput.textContent);

    quickCheckBtnElement.addEventListener('click', () => {
        const rowOneColOne = document.querySelector('table tbody tr td input')
        const rowOneColTwo = document.querySelector('tbody tr td:nth-child(2) input')
        const rowOneColThree = document.querySelector('tbody tr td:nth-child(3) input')
        const rowTwoColOne = document.querySelector('table tbody tr:nth-child(2) td input')
        const rowTwoColTwo = document.querySelector('table tbody tr:nth-child(2) td:nth-child(2) input')
        const rowTwoColThree = document.querySelector('table tbody tr:nth-child(2) td:nth-child(3) input')
        const rowThreeColOne = document.querySelector('table tbody tr:nth-child(3) td input')
        const rowThreeColTwo = document.querySelector('table tbody tr:nth-child(3) td:nth-child(2) input')
        const rowThreeColThree = document.querySelector('table tbody tr:nth-child(3) td:nth-child(3) input')

        const textOutput = document.querySelector('#check p');
        const table = document.querySelector('table');

        if  (
            //row one horizontally
            Number(rowOneColOne.value)+Number(rowOneColTwo.value)+Number(rowOneColThree.value) === 6 && 
            (rowOneColOne.value !== rowOneColTwo.value && 
            rowOneColOne.value !== rowOneColThree.value && 
            rowOneColTwo.value !== rowOneColThree.value) && 
            //row tow horizontally
            Number(rowTwoColOne.value)+Number(rowTwoColTwo.value)+Number(rowTwoColThree.value) === 6 &&
            (rowTwoColOne.value !== rowTwoColTwo.value && 
            rowTwoColOne.value !== rowTwoColThree.value && 
            rowTwoColTwo.value !== rowTwoColThree.value) &&
            //row three horizontally
            Number(rowThreeColOne.value)+Number(rowThreeColTwo.value)+Number(rowThreeColThree.value) === 6 &&
            (rowThreeColOne.value !== rowThreeColTwo.value && 
            rowThreeColOne.value !== rowThreeColThree.value && 
            rowThreeColTwo.value !== rowThreeColThree.value) &&
            //col one vertically
            Number(rowOneColOne.value)+Number(rowTwoColOne.value)+Number(rowThreeColOne.value) === 6 &&
            (rowOneColOne.value !== rowTwoColOne.value && 
            rowOneColOne.value !== rowThreeColOne.value && 
            rowTwoColOne.value !== rowThreeColOne.value) &&
            //col two vertically
            Number(rowOneColTwo.value)+Number(rowTwoColTwo.value)+Number(rowThreeColTwo.value) === 6 &&
            (rowOneColTwo.value !== rowTwoColTwo.value && 
            rowOneColTwo.value !== rowThreeColTwo.value && 
            rowTwoColTwo.value !== rowThreeColTwo.value) &&
            //col three vertically
            Number(rowOneColThree.value)+Number(rowTwoColThree.value)+Number(rowThreeColThree.value) === 6 &&
            (rowOneColThree.value !== rowTwoColThree.value && 
            rowOneColThree.value !== rowThreeColThree.value && 
            rowTwoColThree.value !== rowThreeColThree.value)
            ) {
                textOutput.textContent = "You solve it! Congratulations!";
                textOutput.style.color = 'green';
                table.style.border = '2px solid green'
            } else {
                textOutput.textContent = "NOP! You are not done yet...";
                textOutput.style.color = 'red';
                table.style.border = '2px solid red'
            }
            
        
    })

    clearkBtnElement.addEventListener('click', () => {
        const rowOneColOne = document.querySelector('table tbody tr td input')
        const rowOneColTwo = document.querySelector('tbody tr td:nth-child(2) input')
        const rowOneColThree = document.querySelector('tbody tr td:nth-child(3) input')
        const rowTwoColOne = document.querySelector('table tbody tr:nth-child(2) td input')
        const rowTwoColTwo = document.querySelector('table tbody tr:nth-child(2) td:nth-child(2) input')
        const rowTwoColThree = document.querySelector('table tbody tr:nth-child(2) td:nth-child(3) input')
        const rowThreeColOne = document.querySelector('table tbody tr:nth-child(3) td input')
        const rowThreeColTwo = document.querySelector('table tbody tr:nth-child(3) td:nth-child(2) input')
        const rowThreeColThree = document.querySelector('table tbody tr:nth-child(3) td:nth-child(3) input')

        const textOutput = document.getElementById('#check p');
        const table = document.querySelector('table');

        rowOneColOne.value = '';
        rowOneColTwo.value = '';
        rowOneColThree.value = '';
        rowTwoColOne.value = '';
        rowTwoColTwo.value = '';
        rowTwoColThree.value = '';
        rowThreeColOne.value = '';
        rowThreeColTwo.value = '';
        rowThreeColThree.value = '';

        textOutput.textContent = '';
        table.style.border = 'none';
    })
}