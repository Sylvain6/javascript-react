import { Component, render, createElement } from "./element/weact.js";
import { prop_access } from "./utils/props.js";

class NavBar extends Component{
    constructor(props){
        super(props);
        this.string = '{{title}}';
    }

    render() {
        return createElement('h1', null, this.string.interpolate(this.props));
    }
}

class Hello extends Component{
    constructor(props){
        super(props);
        this.state = { count: 0 }
    }

   /* onClick = () => {
        const { count } = this.state;
        this.setState({count : count + 1});
    };*/

    render() {
        const { count } = this.state;
       return createElement('div', null,
           createElement(NavBar, props, null),
           createElement('div', null,
               createElement('p', null, `${prop_access(this.props, "value.firstname")} ${prop_access(this.props, "value.lastname")}`),
               /*createElement('button', {onClick: this.onClick}, 'Clicker'),
               createElement('label', null, count),*/
           )
       )
    }
}

//routing.add(Hello).add(Test).add(Test);
const props = {
    type: 'object',
    gender: 'person',
    value: {
        firstname: 'Jonathan',
        lastname: 'Rakotonirina',
        greetings: 'Hello',
        navbar: {
            title: 'Welcome To Weact'
        },
    },
};

const app = createElement(Hello, props, null);
render(app, document.getElementById('root'));
