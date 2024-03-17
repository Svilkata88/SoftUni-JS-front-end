function cityInfo(city) {
    for (const element in city) {
        console.log(`${element} -> ${city[element]}`);
    }
}


cityInfo({
    name: "Sofia", 
    area: 492, 
    population: 1238438, 
    country: "Bulgaria", 
    postCode: "1000",
})