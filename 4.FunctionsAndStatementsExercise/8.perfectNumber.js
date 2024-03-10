function perfectNumber(num) {
    let devisors = [];
    for (let i=num / 2; i > 0; i--) {
        if (num % i === 0) {
            devisors.push(i)
        }
    }
    
    sum(devisors) === num ? console.log("We have a perfect number!") : console.log("It's not so perfect.")
    
    function sum(devisors) {
        let result = 0;
        for (let devisor of devisors) {
            result += devisor
        }
        return result;
    }
}

perfectNumber(20)
perfectNumber(6)
perfectNumber(28)
perfectNumber(1236498)