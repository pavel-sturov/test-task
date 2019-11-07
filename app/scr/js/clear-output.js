import { output, input } from "./dom-elements";

function clearOutput() {
    while(output.firstChild) {
        output.removeChild(output.firstChild);
    }
    input.classList.remove('with-output');
}

export default clearOutput;