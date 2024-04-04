function attachGradientEvents() {
    const gradinetBox = document.getElementById('gradient');
    const result = document.getElementById('result');
    

    gradinetBox.addEventListener('mousemove', (e) => {
        const output = Math.floor((e.offsetX / gradinetBox.clientWidth)*100);
        result.textContent = `${output}%`;
    })
    
    gradinetBox.addEventListener('mouseout', (e) => {
        result.textContent = '';
    })
}