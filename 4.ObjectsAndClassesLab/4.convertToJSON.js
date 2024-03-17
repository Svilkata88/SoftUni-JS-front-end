function toJSON(firstName, lastName, hairColor) {
    const newObject = {
        firstName,
        lastName,
        hairColor,
    }

    const newJSON = JSON.stringify(newObject)
    console.log(newJSON)
}

toJSON('George', 'Jones', 'Brown')