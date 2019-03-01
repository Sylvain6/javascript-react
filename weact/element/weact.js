import { type_check_v1, type_check_v2, isClass } from "../utils/helpers.js";
import { undefinedPropertyAccess } from "../utils/messageError.js";

let DOM, elementDOM;

export function createElement(element, props, ...children) {
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
       /* children.forEach(child => appendChild(myElement, child));
        if(props) Object.keys(props).forEach(prop => appendProp(myElement, props, prop));*/
        return myElement;
    }
}

/*function appendChild(element, child) {
    if (child.type === 'WEACT_CLASS') {
        element.appendChild(child.render());
    }  else if (typeof(child) === 'object') {
        element.appendChild(child);
    } else {
        const text = document.createTextNode(child);
        element.appendChild(text);
    }
}

function appendProp(element, propsObject, propVal) {
    if (/^on.*$/.test(propVal)) {
        element.addEventListener(propVal.substring(2).toLowerCase(), propsObject[propVal]);
    } else {
        element.setAttribute(propVal, propsObject[propVal]);
    }
}*/

/*function shouldUpdate() {
    while (elementDOM.hasChildNodes()) {
        elementDOM.removeChild(elementDOM.lastChild);
    }
    render(DOM, elementDOM);
}*/

export class Component {
    constructor(props) {
        this.props = props;
        //this.state  = {};
    }

    /*setState(state) {
        this.state = { ...this.state, ...state};
        shouldUpdate();
    }*/
}

export const render = (element, domElement) => {
    domElement.appendChild(element);
        /*DOM = element;
        console.log(DOM);
        elementDOM = domElement;
        const currentDOM = typeof (DOM) === 'object' ? render() : DOM;
        console.log(currentDOM);
        domElement.appendChild(currentDOM);*/
};
