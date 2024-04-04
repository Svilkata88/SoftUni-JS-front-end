function validate() {
    const inputElement = document.getElementById('email');
    const reg = /^([a-z]+)@([a-z]+)\.([a-z]+)$/;
  

    inputElement.addEventListener('change', (el) => {
        if (!reg.test(el.target.value)) {
            el.target.classList.add('error');
        } else {
            el.target.classList.remove('error');
        }
    })   
}