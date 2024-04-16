function adventure(inputAsList) {
    nCharacters = Number(inputAsList.shift());
    let heroes = {};

    for (let i = 0; i < nCharacters; i++) {
        const [heroName, hp, bullets] = inputAsList[i].split(' ');

        heroes[heroName] = {
                'hp': Number(hp),
                'bullets': Number(bullets),
            };
    }

    inputAsList = inputAsList.slice(nCharacters);
    
    input = inputAsList.shift();
    while (input) {
        
        const [command, ...rest] = input.split(' - ');
        if (command === 'Ride Off Into Sunset') {
            break
        };

        switch(command) {
            case 'FireShot':
                [hero, target] = rest;
                if (heroes[hero].bullets > 0) {
                    heroes[hero].bullets --;
                    console.log(`${hero} has successfully hit ${target} and now has ${heroes[hero].bullets} bullets!`);
                } else {
                    console.log(`${hero} doesn't have enough bullets to shoot at ${target}!`)
                };
                break
                
            case 'TakeHit':
                [hero, dmg, attacker] = rest;
                dmg = Number(dmg);
                heroes[hero].hp -= dmg;
                if(heroes[hero].hp > 0) {
                    console.log(`${hero} took a hit for ${dmg} HP from ${attacker} and now has ${heroes[hero].hp} HP!`)
                } else {
                    delete heroes[hero];
                    console.log(`${hero} was gunned down by ${attacker}!`)
                }
                break

            case 'Reload':
                [hero] = rest;
                if ( heroes[hero].bullets < 6 ) {
                    const bulletsBeforeLoading = heroes[hero].bullets;
                    const reloadedBullets = 6 - bulletsBeforeLoading;
                    heroes[hero].bullets = 6;
                    console.log(`${hero} reloaded ${reloadedBullets} bullets!`);
                } else {
                    console.log(`${hero}'s pistol is fully loaded!`)
                }
                break

            case 'PatchUp':
                [hero, amount] = rest;
                amount = Number(amount);
                if (heroes[hero].hp == 100) {
                    console.log(`${hero} is in full health!`);
                }
                else if (heroes[hero].hp + amount > 100) {
                    const difference = 100 - heroes[hero].hp ;
                    heroes[hero].hp = 100;
                    console.log(`${hero} patched up and recovered ${difference} HP!`);
                } else {
                    heroes[hero].hp += amount;
                    console.log(`${hero} patched up and recovered ${amount} HP!`);
                }
                break
        }
        input = inputAsList.shift();
    }

    for (const hero in heroes) {
        console.log(`${hero}\n HP: ${heroes[hero].hp}\n Bullets: ${heroes[hero].bullets}`)
    }
}



adventure(
    ["2",
   "Gus 100 0",
   "Walt 100 6",
   "FireShot - Gus - Bandit",
   "TakeHit - Gus - 100 - Bandit",
   "Reload - Walt",
   "Ride Off Into Sunset"]
)

console.log('------------------------------')

adventure([
    "2",
    "Jesse 100 4",
    "Walt 100 5",
    "FireShot - Jesse - Bandit",
    "TakeHit - Walt - 30 - Bandit",
    "PatchUp - Walt - 20" ,
    "Reload - Jesse",
    "Ride Off Into Sunset"
])