import { Component, render, createElement} from "./weact.js";

export class Identity extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return createElement('div', null , `You're ${this.props.firstname} ${this.props.lastname}`);
    }
}

const app = createElement(Identity, {firstname: 'Jonathan', lastname: 'Rakotonirina'}, null);
render(app, document.getElementById('root'));
