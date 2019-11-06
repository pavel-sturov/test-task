import createAndAppendElements from "./create-dom-elements.js";

const wrapper = createAndAppendElements('div', 'wrapper', document.body);
const input = createAndAppendElements('input', 'text-input', wrapper);
const label = createAndAppendElements('label', 'check-label', wrapper);
const checkbox = createAndAppendElements('input', 'check-box', label,'', 'checkbox');
const box = createAndAppendElements('span', 'check-span', label);
const sign = createAndAppendElements('span', 'sign-span', label);
sign.innerText = 'Сase sensitive';
const lengthFilter = createAndAppendElements('button','btn', wrapper);
lengthFilter.innerText = 'Filter by length';
const stringFilter = createAndAppendElements('button', 'btn', wrapper);
stringFilter.innerText = 'Filter by string';
const output = createAndAppendElements('div', 'text-output', document.body);

export {
    wrapper,
    input,
    label,
    checkbox,
    box,
    sign,
    lengthFilter,
    stringFilter,
    output
}