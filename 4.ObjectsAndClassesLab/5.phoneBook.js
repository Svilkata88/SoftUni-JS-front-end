function phoneBook(bookInfo) {
    const newObj = {};

    for (let el of bookInfo) {
        const [name, phone] = el.split(' ');
        newObj[name] = phone;
    }

    Object.keys(newObj).forEach(element => console.log(`${element} -> ${newObj[element]}`));

        
    
}

phoneBook(['George 0552554','Peter 087587','George 0453112','Bill 0845344'])