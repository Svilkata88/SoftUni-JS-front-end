function tripCalculator(peopleNumber, groupType, day) {
    let price = null;
    if (day==='Friday') {
        switch(groupType) {
            case 'Students': price = peopleNumber * 8.45;
            if (peopleNumber >= 30) {
                price *= 0.85;
            }
                break
            case 'Business': price = 0;
                if (peopleNumber >= 100) {
                    peopleNumber -= 10;
                }
                price = peopleNumber * 10.90;
                break
            case 'Regular': price = peopleNumber * 15;
                if (peopleNumber >= 10 && peopleNumber <= 20) {
                    price *= 0.95;
                }
                break
        }
    } else if (day==='Saturday') {
        switch(groupType) {
            case 'Students': price = peopleNumber * 9.80;
                if (peopleNumber >= 30) {
                    price *= 0.85;
                }
                break
            case 'Business': price = 0;
                if (peopleNumber >= 100) {
                    peopleNumber -= 10;
                }
                price = peopleNumber * 15.60;
                break
            case 'Regular': price = peopleNumber * 20;
                if (peopleNumber >= 10 && peopleNumber <= 20) {
                    price *= 0.95;
                }
                break
        }
    } else if (day==='Sunday') {
        switch(groupType) {
            case 'Students': price = peopleNumber * 10.46;
                if (peopleNumber >= 30) {
                    price *= 0.85;
                }
                break
            case 'Business': price = 0;
                if (peopleNumber >= 100) {
                    peopleNumber -= 10;
                }
                price = peopleNumber * 16;
                break
            case 'Regular': price = peopleNumber * 22.50;
                if (peopleNumber >= 10 && peopleNumber <= 20) {
                    price *= 0.95;
                }
                break
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`)
}


tripCalculator(
    40,
    "Regular",
    "Saturday"
    )