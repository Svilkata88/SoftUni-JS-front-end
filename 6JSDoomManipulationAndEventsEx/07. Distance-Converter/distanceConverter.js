function attachEventsListeners() {
    const inputFieldElement = document.getElementById('inputDistance');
    const convertBtnElement = document.getElementById('convert');
    const outputFieldElement = document.getElementById('outputDistance');

    const selectedInputElement = document.getElementById('inputUnits');
    const selectedOutputElements = document.getElementById('outputUnits');

    const unitsToMeter = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    convertBtnElement.addEventListener('click', () => {
        const selectedInputElement = document.getElementById('inputUnits');
        const selectedOutputElements = document.getElementById('outputUnits');
        const inputUnitValue = selectedInputElement.value;
        const outputUnitValue = selectedOutputElements.value;
        const inputNumberValue = inputFieldElement.value;

        const toMeter = inputNumberValue * unitsToMeter[inputUnitValue];
        outputFieldElement.value = toMeter / unitsToMeter[outputUnitValue];
        
    })
}