function toggle() {
    let moreButtonElemenet = document.querySelector('div span');
    let hiddenContent = document.getElementById('extra');

    moreButtonElemenet.textContent = moreButtonElemenet.textContent === 'Less' ? 'More': 'Less';
    hiddenContent.style.display = moreButtonElemenet.textContent === 'Less' ? 'block' : 'none';

}