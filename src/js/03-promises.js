import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const formEl = document.querySelector('form.form');
const delayEl = document.querySelector("[name='delay']");
const stepEl = document.querySelector("[name='delay']");
const amountEl = document.querySelector("[name='delay']");
const btnEl = document.querySelector('button');

btnEl.addEventListener('click', onSubmitBtnClick);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);

  });
}

function onSubmitBtnClick(event) {
  event.preventDefault();
  let delay = Number(delayEl.value);
  let step = Number(stepEl.value);
  let amount = Number(amountEl.value);
  for (let position = 1; position <= amount; position += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      })
    delay += step;
  }
};