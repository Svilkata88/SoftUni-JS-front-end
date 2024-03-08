function orders(product, quantity) {
    let price = 0;

    function getPrice(product) {
        switch(product) {
            case 'coffee' : price = 1.5;
                break
            case 'water' : price = 1.0;
                break
            case 'coke' : price = 1.4;
                break
            case 'snacks' : price = 2.0;
        }
        return price
    }
    
    let result = getPrice(product) * quantity
    console.log(result.toFixed(2))
}

orders("water", 5)
orders("coffee", 2)