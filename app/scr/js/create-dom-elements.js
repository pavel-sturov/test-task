function createAndAppendElements(tag, classname, wrapper, text, type) {
    const arg = Array.from(arguments).length;
    const temp = document.createElement(tag);
    temp.classList.add(classname);

    switch (arg) {
        case 2:
            return temp;
        case 3:
            return wrapper.appendChild(temp);
        case 4:
            temp.innerText = text;
            return wrapper.appendChild(temp);
        case 5:
            temp.type = type;
            temp.innerText = text;
            return wrapper.appendChild(temp);
        default:
            return false;
    }
}

export default createAndAppendElements;