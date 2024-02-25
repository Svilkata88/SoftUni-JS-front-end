function circleAria(input) {
    let word = typeof input;
    const PI = 3.141592653589793238462643383279502884197169399375105820974944592307816406286;
    cAria = undefined;
    
    if (word==='number') {
        cAria = PI * (input**2);
	console.log(cAria.toFixed(2));
    } else {
	console.log(`We can not calculate the circle area, because we receive a ${word}.`);
    }

}