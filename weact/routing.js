const Router = function() {
    let routes = [];
    let root = window.location.pathname.substr(0, window.location.pathname.lastIndexOf("/")).substr(1);
    this.isExist = (component) => {
        routes.forEach(r => {
            return r.path === "/" + component.name;
        });
    };
    this.add = (component) => {
        if(typeof component !== "function") {
            return false;
        } else if(this.isExist(component) === true) {
            console.log('already exist');
            return false;
        } else {
            routes.push({path : "/" + component.name, component: component});
        }
        return this;
    };
    /*this.pushRoute : (path) => {
        path = path ? path : '';
        let paths = routes.map(p => p.path);
        paths.forEach(way => {
            console.log(way);
            let fragment = way.toString();
            let frag = fragment.substr(0, fragment.lastIndexOf("/")).substring(1);
            if (frag === path) {
                history.pushState({bar: 'foo'}, null, root + "/" + path);
            }
            else {
                history.pushState(null, null, root + "/error404.html");
            }
        });
        return this;
    }*/
};

export const routing = new Router();
