function calc() {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');

    const result = document.getElementById('sum');

    result.value = Number(num1.value) + Number(num2.value);
}
