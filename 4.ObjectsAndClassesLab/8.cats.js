function cat(inputArray) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let el of inputArray) {
        
        [name, age] = el.split(' ');
        const newCat = new Cat(name, age);
        newCat.meow()
    }
}

cat(['Mellow 2', 'Tom 5'])

cat(['Candy 1', 'Poppy 3', 'Nyx 2'])