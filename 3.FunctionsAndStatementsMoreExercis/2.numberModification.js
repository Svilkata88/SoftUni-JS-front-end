function numberModify(number) {

    function getAvr(number) {
        let numList = number.toString().split('').map(x => Number(x))
        let digitsAvr = numList.reduce((acc, x) => acc + x ,0) / numList.length;  
        
        return digitsAvr
    }
    
    let average = getAvr(number);
    while (average <= 5) {
    
        number = number.toString() + '9';
        
        average = getAvr(number)
    }
   
    console.log(number)
}

numberModify(101)
numberModify(5835)