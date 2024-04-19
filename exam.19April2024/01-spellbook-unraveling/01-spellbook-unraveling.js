function spellbook(inputList) {
    let spell = inputList.shift();

    let [command, ...rest] = inputList.shift().split('!');
    while (command !== 'End') {

        switch(command) {
            case "RemoveEven":
                const newSpell = Array
                                    .from(spell)
                                    .filter((letter, index) => index % 2 === 0 )
                spell = newSpell.join('');
                console.log(spell);
                break
            case 'TakePart':
                const index1 = rest[0]
                const index2 = rest[1]
                const portionSpell = Array
                                        .from(spell)
                                        .slice(index1, index2)
                spell = portionSpell.join('');
                console.log(spell)
                break
            case 'Reverse': 
                const substr = rest[0];
                if (spell.includes(substr)) {
                    const reversedSubStr = Array.from(substr).reverse().join('')
                    spell = spell.replace(substr, '')
                    spell += reversedSubStr;
                    console.log(spell)
                } else {
                    console.log('Error')
                }
                break
        }
        [command, ...rest] = inputList.shift().split('!');
    }

    console.log(`The concealed spell is: ${spell}`)
}

spellbook(
    ["asAsl2adkda2mdaczsa", 
    "RemoveEven",
    "TakePart!1!9",
    "Reverse!maz",
    "End"]
)

console.log('---------------------')

spellbook(
    ["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m", 
    "TakePart!31!42",
    "RemoveEven",
    "Reverse!anim",
    "Reverse!sad",
    "End"]
)
