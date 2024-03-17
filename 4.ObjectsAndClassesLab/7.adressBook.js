function addressBook(inputArray) {
    let book = {};
    for (let el of inputArray) {
        const [name, address] = el.split(':');
        book[name] = address;
    }
    
    Object.keys(book).sort((a, b) => a.localeCompare(b)).map(element => console.log(`${element} -> ${book[element]}`))
}


addressBook([
    'Bob:Huxley Rd',
    'John:MilwaukeeCrossing', 
    'Peter:Fordem Ave', 
    'Bob:Redwing Ave', 
    'George:MestaCrossing', 
    'Ted:Gateway Way', 
    'Bill:Gateway Way', 
    'John:Grover Rd', 
    'Peter:Huxley Rd', 
    'Jeff:Gateway Way', 
    'Jeff:Huxley Rd'
])