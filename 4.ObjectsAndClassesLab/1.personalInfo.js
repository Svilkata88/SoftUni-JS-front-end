function personalInfo(str1, str2, str3) {
    const obj = {
        'firstName': str1,
        'lastName': str2,
        'age': str3,
    }

    return obj
}

person = personalInfo("Peter", "Pan", "20")
console.log(person);