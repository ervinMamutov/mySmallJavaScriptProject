'use strict';

export const data = {
  month: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  days: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  futureDate: [2023, 11, 31, 12, 30, 15], // YYYY, MM, DD, HH:mm:ss
  deadlineMonitor: [
    {
      class: 'days',
      text: 'days',
    },
    {
      class: 'hours',
      text: 'hours',
    },
    {
      class: 'mins',
      text: 'mins',
    },
    {
      class: 'sec',
      text: 'sec',
    },
  ],
};

export const dom = {
  giveaway: document.querySelector('.giveaway'),
  deadline: document.querySelector('.deadline'),
  items: document.querySelectorAll('.deadline-format h4'),
  deadlineFormat: document.querySelector('.deadline-format'),
  deadlineDiv: document.querySelector('.remain-body'),
};
