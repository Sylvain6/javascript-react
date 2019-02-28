import { undefinedPropertyError } from "./messageError.js";

Object.prototype.prop_access = function(path) {
    if(!path) return this;
    const pathArray = path.split(".");
    let object = this;
    for (let i = 0; i< pathArray.length; i++) {
        let newObject = object[pathArray[i]];
        if (newObject === undefined) {
            throw new undefinedPropertyError(
                pathArray.slice(0, i+1).join('.'),
                pathArray[i],
                Object.keys(object)
            );
        }
        object = newObject;
    }

    return object;
};

export function prop_access(object, path) {
    return object.prop_access(path);
}
