import {About} from './about.js';
import {Home} from './home.js';
import {Identity} from './app.js';
import {WeactDOM} from './weact.js';

const Router = function () {
    let allRoutes = {};

    this.addRoute = function (path, component) {
        allRoutes[path] = component;
    };

    this.getAllroutes =  function () {
        return allRoutes;
    };


    this.getRender = function (className, root) {
        WeactDOM.render(new className(), root);

    };

    this.render = function (root) {

        var path  = Object.keys(allRoutes).find(function(url) {
            return  window.location.pathname === url;
        });

        if(path) {
            this.getRender(allRoutes[path], root);
        }
    };
};

export const router = new Router();

router.addRoute('/', Identity);
router.addRoute('/about', About);
router.addRoute('/home', Home);
