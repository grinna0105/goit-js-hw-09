import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const delayEl = document.querySelector("[name='delay']");
const stepEl = document.querySelector("[name='step']");
const amountEl = document.querySelector("[name='amount']");
const btnEl = document.querySelector('button');

btnEl.addEventListener('click', onBtnClick);


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const obj = { position, delay };
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(obj);
      } else {
        reject(obj);
      }
    }, delay);
  });
}

function onBtnClick(event) {
  event.preventDefault();
  onStepPosition();
};

function onStepPosition() {
  let delay = Number(delayEl.value);
  let step = Number(stepEl.value);
  let amount = Number(amountEl.value);
  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      })
    delay += step;
  }
}