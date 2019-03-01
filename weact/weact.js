let rootDOMElement, vDom;

function myElement(element, props, children) {
    if (isClass(element)) {
        return handleClass(element, props);
    }
    else if (isStateLessComponent(element)) {
        return element(props);
    } else {
        return handleHtmlElement(element, children);
    }
}

export function createElement(element, props, ...children) {
    return myElement(element, props, children);
}

function handleClass(classJs, props){
    const component = new classJs(props);
    return component.render();
}

function handleHtmlElement(element, children){
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

function isStateLessComponent(element){
    return !isClass(element) && typeof element === 'function'
}

function isClass(functionJs) {
    return typeof functionJs === 'function'
        && /^class\s/.test(Function.prototype.toString.call(functionJs));
}

export class Component {
    constructor(props) {
        this.props = props;
    }

    display(props) {
        if(this.shouldUpdate(props) === true) {
            render()
        };
    }

    shouldUpdate(newProps){
        return this.props !== newProps;
    }
}

export const render = (element, domEl) => {
    domEl.appendChild(element);
};


export const WeactDOM = {
    render: (element, domElement, activeId) => {
        vDom = element;
        rootDOMElement = domElement;

        const currentDOM = typeof (vDom) === 'object' ? vDom.render() : vDom;

        domElement.appendChild(currentDOM);
        if (activeId) {
            currentDOM.querySelector(`#${activeId}`).focus()
        }

    }
};