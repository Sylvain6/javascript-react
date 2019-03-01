import {About} from './component/about.js';
import {Home} from './component/home.js';
import {Test} from './component/test.js';
import {App} from './app.js';
import {WeactDOM} from './weact.js';

const Router = function () {
    let routes = {};

    this.addRoute = function (path, component) {
        routes[path] = component;
    };


    this.getRender = function (className, root) {
        WeactDOM.render(new className(), root);
    };

    this.render = function (root) {

        const path = Object.keys(routes).find(function (url) {
            return window.location.pathname === url;
        });

        if(path) {
            this.getRender(routes[path], root);
        }
    };
};

export  const router = new Router();

router.addRoute('/', App);
router.addRoute('/about', About);
router.addRoute('/home', Home);
router.addRoute('/test', Test);
