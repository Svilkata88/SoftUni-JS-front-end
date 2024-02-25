let area = 'city';
let speedlimit = null;

switch(area) {
    case 'motorway': 
        speedlimit = 130;
        break
    case 'interstate': 
        speedlimit = 90;
        break
    case 'city': 
        speedlimit = 50;
        break
    case 'residential ': 
        speedlimit = 20;  
        break
}

console.log(speedlimit)