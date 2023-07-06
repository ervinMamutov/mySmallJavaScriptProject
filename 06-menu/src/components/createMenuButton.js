import filterMenuItems from '../handlers/filterMenuItems.js';

const createMenuButton = (btnDate) => {
  // create button
  const btn = document.createElement('btn');
  btn.type = 'button';
  btn.innerText = btnDate.text;
  btn.id = btnDate.id;
  btn.classList.add('filter-btn');

  //add event to btn
  btn.addEventListener('click', () => {
    const id = btn.id;
    filterMenuItems(id);
  });

  return btn;
};

export default createMenuButton;
