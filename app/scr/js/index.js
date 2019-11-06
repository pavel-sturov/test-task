import { input, checkbox, lengthFilter, stringFilter, output } from "./dom-elements"
import createAndAppendElements from "./create-dom-elements";
import request from "./send-request";
import clearOutput from "./clear-output";
import NAMES from "./constants";

let localArr = [];
let isCaseSensitive = false;

window.onload = async () => {
    localArr = await request(NAMES.URL);
    console.log(localArr);
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
        return input.value = el.target.textContent;
    });

    lengthFilter.addEventListener('click', () => {
        let num = Number(input.value);

        if (num < 1 || isNaN(num) === true || num > 25) {
            return false;
        } else {
            let myArr = localArr.filter(el => {
                return el.length >= num;
            });

            myArr.map(el => {
                createAndAppendElements('div', 'result-item', output, el);
            });
            input.style.borderRadius = '5px 5px 0 0';
        }
    });

    stringFilter.addEventListener('click', () => {
        let str = input.value;
        let myArr = [];

        if (isNaN(Number(str)) === false || str.length < 1) {
            return false;
        } else {
            if (!isCaseSensitive) {
                myArr = localArr.filter(el => {
                    return el.toLowerCase().includes(str.toLowerCase());
                });
            } else {
                myArr = localArr.filter(el => {
                    return el.includes(str);
                });
            }
            if (myArr.length === 0) {
                return false;
            }
            myArr.map(el => {
                createAndAppendElements('div', 'result-item', output, el);
            });
            input.style.borderRadius = '5px 5px 0 0';
        }
    });
}

export default start;


