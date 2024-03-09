function smallestNUm(...numbers) {
    const maxInt = Number.MAX_SAFE_INTEGER;
    numbers = [...numbers];

    numbers = numbers.reduce((result, n) => result < n ? result : n, maxInt)
    console.log(numbers)
}


smallestNUm(2, 5, 3)
smallestNUm(600, 342, 123)