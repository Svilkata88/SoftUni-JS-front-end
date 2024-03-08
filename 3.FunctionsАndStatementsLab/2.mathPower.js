function toPower(num, pow) {
    let result = 1;

    for (let i=0; i < pow; i++) {
        result *= num;
    }

    console.log(result)
}

toPower(2, 8)
toPower(3, 4)
