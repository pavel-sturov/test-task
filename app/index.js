// import createAppend from "./tools.js";

let localArr = [];

window.onload = () => {
    request(URL).then(res => {
        localArr = [...res.data];
    });
};

const URL = 'http://www.mrsoft.by/data.json';

let isRegistr = false;

const wrapper = createAppend('div', 'wrapper', document.body);
const input = createAppend('input', 'text-input', wrapper);
const label = createAppend('label', 'check-label', wrapper);
const checkbox = createAppend('input', 'check-box', label,'', 'checkbox');
const box = createAppend('span', 'check-span', label);
const sign = createAppend('span', 'sign-span', label);
    sign.innerText = 'Сase sensitive';
const lengthFilter = createAppend('button','btn', wrapper);
    lengthFilter.innerText = 'Filter by length';
const stringFilter = createAppend('button', 'btn', wrapper);
    stringFilter.innerText = 'Filter by string';
const output = createAppend('div', 'text-output', document.body);

checkbox.addEventListener('click', () => {
    clearOutput();
    isRegistr = !isRegistr;
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
            createAppend('div', 'result-item', output, el);
        });
        input.style.borderRadius = '10px 10px 0 0';
    }
});

stringFilter.addEventListener('click', () => {
    let str = input.value;
    let myArr = [];

    if (isNaN(Number(str)) === false || str.length < 1) {
        return false;
    } else {
        if (!isRegistr) {
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
            createAppend('div', 'result-item', output, el);
        });
        input.style.borderRadius = '10px 10px 0 0';
}});

async function request(url) {
    let req = await fetch(url, {
        method: 'GET',
        mode: 'cors',
    });
    if (req.ok) {
        return await req.json();
    } else {
        console.log('Something goes wrong!');
    }
}

function createAppend(tag, classname, wrapper, text, type) {
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

function clearOutput() {
    while(output.firstChild) {
        output.removeChild(output.firstChild);
    }
    input.style.borderRadius = '10px';
}
