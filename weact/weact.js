import { type_check_v1, type_check_v2, isClass } from "./helpers.js";
import { undefinedPropertyAccess } from "./messageError.js";

export function createElement(element, props, ...children) {
    if (isClass(element)) {
        if(type_check_v2(props.value, props) === true){
            const component = new element(props);
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
        return myElement;
    }
}

function appendChild(element, child) {
    if (child.type === 'REACT_CLASS') {
        appendChild(element, child.render());
    } else if (Array.isArray(child)) {
        child.forEach(ch => appendChild(element, ch));
    } else if (typeof(child) === 'object') {
        element.appendChild(child);
    } else {
        element.innerHTML += child;
    }
}

function appendProp(element, propName, propVal) {
    if (/^on.*$/.test(propName)) {
        element.addEventListener(propName.substring(2).toLowerCase(), propVal);
    } else {
        element.setAttribute(propName, propVal);
    }
}

export class Component {
    constructor(props) {
        this.props = props;
    }

    shouldUpdate(newProps) {
        if(this.props !== newProps) {
            while (elementDOM.hasChildNodes()) {
                elementDOM.removeChild(elementDOM.lastChild);
            }
            DOM.render(DOM, elementDOM);
        }
    }
}

export const render = (elementDOM, DOM) => {
    DOM.appendChild(elementDOM);
};
