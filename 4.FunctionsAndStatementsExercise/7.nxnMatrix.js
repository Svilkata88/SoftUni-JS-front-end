function printMatrix(num) {
    for (let i=0; i < num; i++) {
        printRow(num)
    }
    
    function printRow(num) {
        let rowResult = `${num}` 
        
        for (let i=1; i < num; i++) {
            rowResult += ` ${num}` 
        }
        console.log(rowResult)
    }
}

printMatrix(2)