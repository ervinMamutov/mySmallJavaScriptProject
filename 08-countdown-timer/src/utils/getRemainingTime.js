'use strict';
import setFutureDate from './setFutureDate.js';

const today = new Date().getTime();

const remainTime = setFutureDate() - today;
console.log('today : ' + today);
console.log('remainTime : ' + remainTime);

const dayMilliseconds = 24 * 60 * 60 * 1000;
const hourMilliseconds = 60 * 60 * 1000;
const minuteMilliseconds = 60 * 1000;
const secondsMilliseconds = 1000;

let dayRemainder = Math.floor(remainTime / dayMilliseconds);
console.log('dayRemainder : ' + dayRemainder);
let hourRemainder = Math.floor(
  (remainTime % dayMilliseconds) / hourMilliseconds
);
console.log('hourRemainder : ' + hourRemainder);
let minutesRemainder = Math.floor(
  (remainTime % hourMilliseconds) / minuteMilliseconds
);
console.log('minutesRemainder : ' + minutesRemainder);
let secondsRemainder = Math.floor(
  (remainTime % minuteMilliseconds) / secondsMilliseconds
);
console.log('secondsRemainder : ' + secondsRemainder);

export const remainCounter = [
  dayRemainder,
  hourRemainder,
  minutesRemainder,
  minutesRemainder,
  secondsRemainder,
];
