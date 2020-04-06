//variables for the digital clock
const digitalHour = document.querySelector('.hours');
const digitalMinute = document.querySelector('.minutes');
const digitalSecond = document.querySelector('.seconds');

//variables for analog clock
const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand', '.transition');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    //updating digital clock
    digitalSecond.textContent = seconds;
    digitalMinute.textContent = minutes;
    digitalHour.textContent = hours;

    //updating analog clock
    const secondsDegrees = (seconds / 60) * 360 + 90;
    const minutesDegrees = (minutes / 60) * 360 + 90;
    const hoursDegrees = (hours / 12) * 360 + 90;

    if(seconds === 59 || seconds === 0) {
        secondsHand.classList.remove('.transition');
        secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
        
    } else {
        secondsHand.classList.add('.transition');
        secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    }

    
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}


setInterval(setDate, 1000); //updates/calls setInterval each second


