function isPalindrome(palindromeList) {

    function palindromeChecker(number) {
        const strNumber = number.toString()
        const left = strNumber.slice(0, strNumber.length % 2 === 0 ? strNumber.length / 2 : strNumber.length / 2);
        let right = strNumber.slice(strNumber.length % 2 === 0 ? strNumber.length / 2 : (strNumber.length / 2) + 1);

        right = right.split('').reverse().join('')

        left === right ? console.log('true') : console.log('false')
    }

    for (let string of palindromeList) {
        palindromeChecker(string)
    }
}


isPalindrome([123,323,421,121])
isPalindrome([32,2,232,1010])


