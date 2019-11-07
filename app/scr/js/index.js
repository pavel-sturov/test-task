import { input, checkbox, lengthFilter, stringFilter, output } from "./dom-elements"
import createAndAppendElements from "./create-dom-elements";
import request from "./send-request";
import clearOutput from "./clear-output";
import URL from "./constants";

let data = [];
let isCaseSensitive = false;

window.onload = async () => {
    data = await request(URL.PROXY + URL.DATA);
};

function start() {
    checkbox.addEventListener('click', () => {
        clearOutput();
        isCaseSensitive = !isCaseSensitive;
    });

    input.addEventListener('input', () => {
        clearOutput();
    });

    output.addEventListener('click', (el) => {
        clearOutput();
        input.value = el.target.textContent;
    });

    lengthFilter.addEventListener('click', () => {
        const num = Number(input.value);

        if (num < 1 || isNaN(num) || num > 25) {
            return false;
        }

        const filteredData = data.filter(el => el.length >= num);

        filteredData.map(el => {
            createAndAppendElements({ tag: 'div', classname: 'result-item', parent: output, text: el });
        });
        if (filteredData.length) {
            input.classList.add('with-output');
        }
    });

    stringFilter.addEventListener('click', () => {
        let str = input.value;
        let filteredData = [];

        if (!isNaN(Number(str)) || str.length < 1) {
            return false;
        }

        if (!isCaseSensitive) {
            filteredData = data.filter(el => el.toLowerCase().includes(str.toLowerCase()));
        } else {
            filteredData = data.filter(el => el.includes(str));
        }

        filteredData.map(el => {
            createAndAppendElements({ tag: 'div', classname: 'result-item', parent: output, text: el });
        });

        if (filteredData.length) {
            input.classList.add('with-output');
        }
    });
}

export default start;


