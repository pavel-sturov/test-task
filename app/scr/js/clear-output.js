import { output, input } from "./dom-elements";

export default function clearOutput() {
    while(output.firstChild) {
        output.removeChild(output.firstChild);
    }
    input.style.borderRadius = '5px';
}