'use strict';

import { data, dom } from '../data.js';

const deadlineFormat = (remainCounter) => {
  const deadlineMonitor = data.deadlineMonitor;
  const div = dom.deadlineDiv;
  const deadlineFormat = document.querySelector('.deadline-format');
  const headRemain = document.createElement('h4');
  const spanRemain = document.createElement('span');

  div.append(headRemain);
  div.append(spanRemain);

  deadlineFormat.forEach((item) => {
    headRemain.classList.add(item.class);
    headRemain.innerText = remainCounter;
    spanRemain.innerText = deadlineMonitor.text;
  });

  console.log('deadlineMonitor : ' + deadlineMonitor);
  console.log('remainCounter : ' + remainCounter);
};

export default deadlineFormat;
