function store(arr1, arr2) {
    let stock = {};
    arr1.forEach((el, index, arr) => {
        if (index % 2 === 0) {
            stock[el] = Number(arr[index + 1]);
        };
    });

    arr2.forEach((el, index, arr) => {
        if (index % 2 === 0) {
            if (!stock[el]) {
                stock[el] = 0;
            }
            stock[el] += Number(arr[index + 1]);
        };
    });

    for (let product in stock) {
        console.log(`${product} -> ${stock[product]}`)
    }
}

store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], 
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
    )