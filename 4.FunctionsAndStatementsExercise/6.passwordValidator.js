function checkPassword(password) {
    const messages = [];

    function validateLenght(password) {
        if (password.length < 6 || password.length > 10) {
            messages.push("Password must be between 6 and 10 characters")
        }
    }

    function validateLettersDigits(password) {
        result = Array.from(password).filter(each => !/^[a-zA-Z0-9]+$/.test(each))
        
        if (result.length !== 0) {
            messages.push("Password must consist only of letters and digits")
        }
    
    }

    function validateAtleastTwoDigits(password) {
        if (!/\d{2,}/.test(password)) {
            messages.push("Password must have at least 2 digits")
        }
    }
 
    validateLenght(password), validateLettersDigits(password), validateAtleastTwoDigits(password);

    if (messages.length === 0) {
        console.log("Password is valid")
    } else {
        for (let message of messages) {
            console.log(message)
        }
    }
}

checkPassword('logIn')
//checkPassword('Pa$s$s')
//heckPassword('MyPass123')