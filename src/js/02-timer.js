import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const inputEl = document.getElementById('datetime-picker');
const refs = {
    daysEl: document.querySelector('span[data-days]'),
    hoursEl: document.querySelector('span[data-hours]'),
    minutesEl: document.querySelector('span[data-minutes]'),
    secondsEl: document.querySelector('span[data-seconds]'),
}

let timerId = null;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= new Date()) {
          Notiflix.Notify.failure("Please choose a date in the future");
          startBtn.disabled = true;
          return;
        }
      startBtn.disabled = false;
  }
}

flatpickr(inputEl, options);

startBtn.addEventListener('click', () => {
  timerId = setInterval(countDownTimer, 1000);
  startBtn.disabled = true;
});


function countDownTimer() {  
  const choosenDate = new Date(inputEl.value);
  // console.log(choosenDate);
  const currentDate = Date.now();
  // console.log(currentDate);
  const deltaTime = choosenDate - currentDate;
  const time = convertMs(deltaTime);
  console.log(deltaTime);
  updateClockface(time);

  if (deltaTime <= 0) {
    stopInterval();
    
  }
}

function updateClockface({ days, hours, minutes, seconds }) {
    refs.daysEl.textContent = `${days}`;
    refs.hoursEl.textContent = `${hours}`;
    refs.minutesEl.textContent = `${minutes}`;
    refs.secondsEl.textContent = `${seconds}`;
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function stopInterval() {
  clearInterval(timerId);
  Notiflix.Notify.success('The timer has been stopped');
  refs.daysEl.textContent = '00';
  refs.hoursEl.textContent = '00';
  refs.minutesEl.textContent = '00';
  refs.secondsEl.textContent = '00';
  bodyEl.style.backgroundColor = 'greenyellow';
}

