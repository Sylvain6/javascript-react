import { type_check_v1, type_check_v2, isClass } from "./utils/helpers.js";
import { undefinedPropertyAccess } from "./utils/messageError.js";

let DOM, elementDOM;

export function createElement(element, props, className, ...children) {
    if (isClass(element)) {
        if(type_check_v2(props.value, props) === true){
            const component = new element(props);
            component.type = 'WEACT_CLASS';
            return component.render();
        } else {
            throw new undefinedPropertyAccess(props, {type: "object", value: {}})
        }
    }
    else if (type_check_v1(element, "function") && !isClass(element)) {
        return element(props);
    } else {
        const myElement = document.createElement(element);
        children.forEach(kid => {
            if(typeof (kid) === "object") {
                myElement.appendChild(kid);
            } else {
                myElement.innerHTML += kid;
            }
        });
        if(className !== null){
            myElement.classList.add(className);
        }
        return myElement;
    }
}

export class Component {
    constructor(props) {
        this.props = props;
    }
}

export const render = (element, domEl) => {
    domEl.appendChild(element);
};

export const WeactDOM = {
    render: (element, domElement) =>{
        DOM = element;
        elementDOM = domElement;
        const currentDOM = typeof (DOM) === 'object' ? DOM.render() : DOM;
        domElement.appendChild(currentDOM);
    }
};
