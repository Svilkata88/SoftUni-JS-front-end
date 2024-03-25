function colorize() {
    //const data = document.getElementsByTagName('tr')//(`tr:nth-child(even) td`);
    const dataARray = Array.from(document.getElementsByTagName('tr'))
    
    for (let i = 1; i<dataARray.length; i++) {
        if(i%2!==0) {
            dataARray[i].style.backgroundColor = 'teal'
        }
    }
   
}