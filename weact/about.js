import { Component, render, createElement} from "./weact.js";

export class About extends Component  {
    render() {
        return  createElement('div',null,
            createElement('h1', null, 'About'));
    }
}