function meetings(inputArray) {
    let meetings = {};

    for (let el of inputArray) {
        [day, name] = el.split(' ');
        if (day in meetings) {
            console.log(`Conflict on ${day}!`);
            continue
        } 
        meetings[day] = name;
        console.log(`Scheduled for ${day}`)
     }

     Object.keys(meetings).map(el => console.log(`${el} -> ${meetings[el]}`))
}

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim'])