function attachEventsListeners() {
    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');

    const buttonElements = document.querySelectorAll('div input[type=button]')
    Array
        .from(buttonElements)
        .forEach(btn => btn.addEventListener('click', () => {
                let days = document.getElementById('days').value;
                let hours = document.getElementById('hours').value;
                let minutes = document.getElementById('minutes').value;
                let seconds = document.getElementById('seconds').value;
                

                if (days) {
                    hoursElement.value = days * 24;
                    minutesElement.value = hoursElement.value * 60;
                    secondsElement.value = minutesElement.value * 60;
                } else if (hours) {
                    minutesElement.value = hours * 60;
                    secondsElement.value = minutesElement.value * 60;
                    daysElement.value = hours / 24;
                } else if (minutes) {
                    secondsElement.value = minutes * 60;
                    hoursElement.value = Math.trunc(minutes / 60);
                    daysElement.value = hoursElement.value / 24;
                } else if (seconds) {
                    minutesElement.value = Math.trunc(seconds / 60);
                    hoursElement.value = Math.trunc(minutesElement.value / 60);
                    daysElement.value = hoursElement.value / 24;
                }
        }))
    }
