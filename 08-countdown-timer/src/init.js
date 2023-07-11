'use strict';

import deadlineFormat from './components/createDeadlineMonitor.js';
import { remainCounter } from './utils/getRemainingTime.js';
import { dom } from './data.js';

const divDeadLine = dom.deadlineFormat;

remainCounter.forEach((item) => {
  console.log(Number(item));
  divDeadLine.append.deadlineFormat(item);

  /* deadlineFormat(items);
  console.log(deadlineFormat(items)); */
});
