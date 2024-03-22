function inventory(stringsArray) {
    let Heroes = [];

    stringsArray
        .forEach(heroLine => {
            let [heroName, heroLevel, heroItems] = heroLine.split(' / ');
            heroLevel = Number(heroLevel);
            const newObj = {
                Hero: heroName, 
                level: heroLevel,
                items: heroItems.split(', '),
            }
            Heroes.push(newObj)
        });
    
    Heroes
        .sort((a, b) => a.level - b.level)
        .forEach(hero => {
            console.log(`Hero: ${hero.Hero}`);
            console.log(`level => ${hero.level}`)
            console.log(`items => ${hero.items.join(', ')}`)
        })
}


inventory([

    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',    
    'Hes / 1 / Desolator, Sentinel, Antara'

    ])