function toObj(str) {
    const newObject = JSON.parse(str)
    for (const element in newObject) {
        console.log(`${element}: ${newObject[element]}`)
    }
    
}

toObj('{"name": "George", "age": 40, "town": "Sofia"}')