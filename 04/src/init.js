// Import listeners
import './listeners/toggleLinksListener.js';

import data from './data.js';
import createLink from './components/createLink.js';
import createIcon from './components/createIcon.js';

// on init
const links = document.querySelector('.links');
const icons = document.querySelector('.social-icons');

data.links.forEach((linkData) => {
    const link = createLink(linkData);
    links.append(link);
});
data.icons.forEach((iconData) => {
    const icon = createIcon(iconData);
    icons.append(icon);
});
