import { Component, render, createElement} from "./weact.js";
import { routing } from "./routing.js";

class Hello extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return createElement('div', null , `Hello ${this.props.firstname} ${this.props.lastname}`);
    }
}

class Test extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return createElement('div', null , `Hello ${this.props.firstname} ${this.props.lastname}`);
    }
}

//routing.add(Hello).add(Test).add(Test);

const app = createElement(Hello, {firstname: 'Jonathan', lastname: 'Rakotonirina'}, null);
render(app, document.getElementById('root'));
