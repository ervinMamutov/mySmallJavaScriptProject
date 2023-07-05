const links = document.querySelector('.links');
const navIcon = document.querySelector('.fa-bars');

const toggleLinksHandler = () => {
    links.classList.toggle('show-links');
    navIcon.classList.toggle('rotate');
};

export default toggleLinksHandler;
