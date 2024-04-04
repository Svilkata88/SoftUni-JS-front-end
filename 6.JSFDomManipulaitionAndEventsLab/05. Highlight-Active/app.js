function focused() {
    const divListElements = document.querySelectorAll('body div div input')

    Array.from(divListElements)
        .forEach(el => el.addEventListener('focus', (e) => e.target.parentElement.classList.add('focused')));

    Array.from(divListElements)
        .forEach(el => el.addEventListener('blur', (e) => e.target.parentElement.classList.remove('focused')));

}