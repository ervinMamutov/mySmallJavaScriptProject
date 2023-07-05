const createIcon = (iconData) => {
    // create icon
    const icon = document.createElement('li');

    // create anchor
    const anchor = document.createElement('a');
    anchor.innerHTML = iconData.iconText;
    anchor.href = iconData.href;

    // append
    icon.append(anchor);
    return icon;
};

export default createIcon;
