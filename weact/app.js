import { Component, createElement } from "./weact.js";
import { prop_access } from "./utils/props.js";

const props = {
    type: 'object',
    gender: 'person',
    value: {
        firstname: 'Jonathan',
        lastname: 'Rakotonirina',
        navbar: {
            title: 'Welcome To Weact'
        },
    },
};

export class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return createElement('div', null, `container`,
            createElement(NavBar, props, `h1`, null),
            createElement(Hello, props, `hello`, null)
        )
    }
}

class NavBar extends Component{
    constructor(props){
        super(props);
        this.string = '{{title}}';
    }

    render() {
        return createElement('h1', null, `test`, this.string.interpolate(this.props));
    }
}

class Hello extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return createElement('div', null, null,
            createElement('p', null, `p`, `Hello ${prop_access(this.props, "value.firstname")} ${prop_access(this.props, "value.lastname")}`),
        )

    }
}
