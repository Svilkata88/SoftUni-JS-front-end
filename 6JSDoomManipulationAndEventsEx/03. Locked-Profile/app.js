function lockedProfile() {
    const ProfileElements = document.querySelectorAll('.profile')
    const radioBtns = Array
        .from(ProfileElements)
        //.forEach(el => console.log(el.querySelector('input[type=radio]').checked))
    const showMoreElement = document.querySelectorAll('main div button');

    Array
        .from(showMoreElement)
        .forEach(el => {
            el.addEventListener('click', (e) => {
                const lockedRadioBtn = e.target.parentElement.querySelector('input[type=radio]')
                if (!lockedRadioBtn.checked) {
                    const details = e.target.parentElement.querySelector('div');
                    let btnName = e.target;
                    
                    btnName.textContent = btnName.textContent === 'Hide it'? 'Show more' : 'Hide it';
                    details.style.display = details.style.display === 'block'? 'none' : 'block';
                } 
            })
        })
}