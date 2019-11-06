import * as dom from "./scr/js/dom-elements"
import createAndAppendElements from "./scr/js/create-dom-elements";
import request from "./scr/js/send-request";
import clearOutput from "./scr/js/clear-putput";

let localArr = [];
const URL = 'https://www.mrsoft.by/data.json';
let isCaseSensitive = false;

window.onload = () => {
    request(URL).then(res => {
        localArr = [...res.data];
    });
};

dom.checkbox.addEventListener('click', () => {
    clearOutput();
    isCaseSensitive = !isCaseSensitive;
});

dom.input.addEventListener('input', () => {
    clearOutput();
});

dom.output.addEventListener('click', (el) => {
    clearOutput();
    return dom.input.value = el.target.textContent;
});

dom.lengthFilter.addEventListener('click', () => {
    let num = Number(dom.input.value);

    if (num < 1 || isNaN(num) === true || num > 25) {
        return false;
    } else {
        let myArr = localArr.filter(el => {
            return el.length >= num;
        });

        myArr.map(el => {
            createAndAppendElements('div', 'result-item', dom.output, el);
        });
        input.style.borderRadius = '10px 10px 0 0';
    }
});

dom.stringFilter.addEventListener('click', () => {
    let str = dom.input.value;
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
            createAndAppendElements('div', 'result-item', dom.output, el);
        });
        dom.input.style.borderRadius = '10px 10px 0 0';
    }
});
