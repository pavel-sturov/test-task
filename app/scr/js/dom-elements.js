import createAndAppendElements from "./create-dom-elements.js";

const wrapper = createAndAppendElements({ tag: 'div', classname: 'wrapper', parent: document.body });
const input = createAndAppendElements({ tag: 'input', classname: 'text-input', parent: wrapper });
const label = createAndAppendElements({ tag: 'label', classname: 'check-label', parent: wrapper });
const checkbox = createAndAppendElements({ tag: 'input', classname: 'check-box', parent: label, type: 'checkbox' });
const lengthFilter = createAndAppendElements({ tag: 'button', classname: 'btn', parent: wrapper, text: 'Filter by length' });
const stringFilter = createAndAppendElements({ tag: 'button', classname: 'btn', parent: wrapper, text: 'Filter by string' });
const output = createAndAppendElements({ tag: 'div', classname: 'text-output', parent: wrapper });
createAndAppendElements({ tag: 'span', classname: 'check-span', parent: label });
createAndAppendElements({ tag: 'span', classname: 'sign-span', parent: label, text: 'Сase sensitive' });

export {
    wrapper,
    input,
    label,
    checkbox,
    lengthFilter,
    stringFilter,
    output
}