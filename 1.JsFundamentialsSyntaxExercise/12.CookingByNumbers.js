function CookingNumbers(num, op1, op2, op3, op4, op5) {
    let result = Number(num);
    list = [op1, op2, op3, op4, op5];
 
    for (let i = 0; i < list.length; i++) {
        switch(list[i]) {
            case 'chop': 
                result /= 2;
                break
            case 'dice': 
                result = Math.sqrt(result);
                break
            case 'spice':
                result++;
                break
            case 'bake':
                result *= 3;
                break
            case 'fillet':
                result *= 0.8;
                break
        }
        console.log(result)
    }
}

CookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')