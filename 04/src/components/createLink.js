const createLink = (linkData) => {
    // create link
    const link = document.createElement('li');

    // create anchor
    const anchor = document.createElement('a');
    anchor.innerText = linkData.text;
    anchor.href = linkData.href;

    // append
    link.append(anchor);
    return link;
};

export default createLink;
