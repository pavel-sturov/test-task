function createAndAppendElements({ tag, classname, parent, text, type }) {
    const newElement = document.createElement(tag);

    if (classname) {
        newElement.classList.add(classname);
    }
    if (parent) {
        parent.appendChild(newElement);
    }
    if (text) {
        newElement.innerText = text;
    }
    if (type) {
        newElement.type = type;
    }
    return newElement;
}
export default createAndAppendElements;