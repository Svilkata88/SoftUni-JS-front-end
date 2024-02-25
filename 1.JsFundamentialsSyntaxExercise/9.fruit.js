function fruitCalculator(fruit, grams, priceKG) {
    priceGram = priceKG / 1000

    money = (grams * priceGram) 

    console.log(`I need $${money.toFixed(2)} to buy ${(grams/1000).toFixed(2)} kilograms ${fruit}.`)
}

fruitCalculator('apple', 1563, 2.35)