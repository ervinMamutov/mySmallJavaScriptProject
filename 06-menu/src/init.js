'use strict';

import { data, dom } from './data.js';
import createMenuItem from './components/createMenuItem.js';
import createMenuButton from './components/createMenuButton.js';

//show button
data.button.forEach((btnData) => {
  const btnDom = createMenuButton(btnData);
  dom.btnContainer.append(btnDom);
});

// show by item by default
data.menu.forEach((itemDate) => {
  const itemDom = createMenuItem(itemDate);
  dom.sectionCenter.append(itemDom);
});
