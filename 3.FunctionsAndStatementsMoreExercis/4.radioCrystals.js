function cutTheCrystals(crystalsTask) {
    [crystalTarget, ...quartzOreChunks] = crystalsTask
    // need to have false if x-ray is used! This applies for every chuncks we cut!
    let chunks = [...quartzOreChunks]
    
    while (chunks.length > 0) {
        const chunk = chunks.shift();
        let result = undefined;
        let xRay = false;
        console.log(`Processing chunk ${chunk} microns`);
        result = cut(crystalTarget, chunk, xRay);
        console.log(`Finished crystal ${result} microns`);
    }

    function cut(target, pieceOre, xRay) { 
        // target = searched tickness of the crystal, 
        // pieceOre = raw quartz ore which should be cut, 
        // xRay = false if the operation for +1 mircon not used so far.
        let cutCounter = 0;
        let lapCounter = 0;
        let grindCounter = 0;
        let etchCounter = 0;
    
        const operations = {
        'Cut': pieceOre => pieceOre / 4,
        'Lap': pieceOre => pieceOre * 0.8,
        'Grind': pieceOre => pieceOre - 20,
        'Etch': pieceOre => pieceOre -2,
        'X-ray': pieceOre => pieceOre + 1,
        'Transporting and washing': pieceOre => Math.floor(pieceOre),
        };
    
        while (pieceOre / 4 >= target) {
            pieceOre = operations.Cut(pieceOre)
            cutCounter ++;
        } 
        if (cutCounter > 0) {
            console.log(`Cut x${cutCounter}`)
            pieceOre = operations["Transporting and washing"](pieceOre)
            console.log("Transporting and washing")
        }
            
        while (pieceOre * 0.8 >= target) {
            pieceOre = operations.Lap(pieceOre)
            lapCounter ++;
        } 
        if (lapCounter > 0) {
            console.log(`Lap x${lapCounter}`)
            pieceOre = operations["Transporting and washing"](pieceOre)
            console.log("Transporting and washing")
        }
            
        while (pieceOre - 20 >= target) {
            pieceOre = operations.Grind(pieceOre)
            grindCounter ++;
        } 
        if (grindCounter > 0) {
            console.log(`Grind x${grindCounter}`)
            pieceOre = operations["Transporting and washing"](pieceOre)
            console.log("Transporting and washing")
        }
            
        while (pieceOre - 2 >= target - 1) {
            pieceOre = operations.Etch(pieceOre)
            etchCounter ++;
        } 
        if (etchCounter > 0) {
            console.log(`Etch x${etchCounter}`)
            pieceOre = operations["Transporting and washing"](pieceOre)
            console.log("Transporting and washing")
        }     
    
        if (pieceOre === target - 1 && xRay !== true) {
            pieceOre = operations["X-ray"](pieceOre)
            xRay = true
            console.log(`X-ray x1`)
        } 
        return pieceOre;
    }
}

    

cutTheCrystals([1000, 4000, 8100])
