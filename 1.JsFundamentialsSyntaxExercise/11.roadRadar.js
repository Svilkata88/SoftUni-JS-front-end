

function roadRadar(speed, area) {
    let overspeed = null;
    let speedlimit = null;
    let status = undefined;
    
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
        case 'residential': 
            speedlimit = 20;  
            break
    }
    overspeed = speed - speedlimit

    if (overspeed > 0 && overspeed < 20) {
        status = 'speeding';
    } else if (overspeed >= 20 && overspeed < 40) {
        status = 'excessive speeding';
    } else if (overspeed >= 40) {
        status = 'reckless driving';
    }

    if (speedlimit >= speed) {
        console.log(`Driving ${speed} km/h in a ${speedlimit} zone`)
    } else {
        console.log(`The speed is ${overspeed} km/h faster than the allowed speed of ${speedlimit} - ${status}`)
    }
}

roadRadar(40, 'city');