import { Component, render, createElement} from "./weact.js";
import { routing } from "./routing.js";
import { prop_access } from "./props.js";

class Hello extends Component{
    constructor(props){
        super(props);
    }

    render() {
       return createElement('div', null,
           createElement('h1', null, 'Welcome in Weact' ),
           createElement('div', null,
               createElement('p', null, `${prop_access(this.props, "value.firstname")} ${prop_access(this.props, "value.lastname")}`)
           )
       )
    }
}

//routing.add(Hello).add(Test).add(Test);
const object = {
    type: 'object',
    value: {
        firstname: 'Jonathan',
        lastname: 'Rakotonirina',
        third: {
            age: '21',
            date: '27/02/2019'
        }
    },
};

const app = createElement(Hello, object, null);
render(app, document.getElementById('root'));
