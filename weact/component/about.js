import { Component, createElement } from "../weact.js";

export class About extends Component  {
    render() {
        return createElement('div', null, null,
            createElement('h1', null, null, 'About'));
    }
}
