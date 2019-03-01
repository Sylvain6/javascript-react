// Type Checker
export function type_check_v1(data, type) {
    switch(typeof data) {
        case "number":
        case "string":
        case "boolean":
        case "undefined":
        case "function":
            return type === typeof data;
        case "object":
            switch(type) {
                case "null":
                    return data === null;
                case "array":
                    return Array.isArray(data);
                default:
                    return data !== null && !Array.isArray(data);
            }

    }

    return false;
}
export function type_check_v2(data, conf) {
    for (let key of Object.keys(conf)) {
        switch (key) {
            case 'type':
                if (!type_check_v1(data, conf[key])) return false;
                break;
            case 'value':
                if (JSON.stringify(data) !== JSON.stringify(conf[key])) return false;
                break;
            case 'enum':
                let valid = false;
                for (let value of conf[key]) {
                    valid = type_check_v2(data, {value});
                    if (valid) break;
                }
                if(!valid) return false;
        }
    }
    return true;
}

//  Verification d'une classe
export function isClass(elementClass) {
    return type_check_v1(elementClass, "function") && /^class\s/.test(elementClass);
}

// Interpolate
function interpolatePropsAccess(object, searchKey) {
    let valueSearch = "";
    if(object.hasOwnProperty(searchKey) === true) {
        valueSearch = object[searchKey];
    } else if(Object.entries(object).some(value => typeof value === "object")) {
        Object.entries(object).map(value => {
            switch (typeof value[1]) {
                case "object":
                    valueSearch = interpolatePropsAccess(value[1], searchKey);
                    break;
                case "number":
                    break;
                case "string":
                    break;
                case "boolean":
                    break;
                case "undefined":
                    break;
                case "function":
                    break;
                default:
                    console.log("Property not found")
            }

        })
    } else {
        console.log("Property doesn't exist");
    }
    return valueSearch;
}

String.prototype.interpolate = function(params){
    return this.replace(/{{([^}]+)}}/g, function(value, v){
        return interpolatePropsAccess(params, v);
    });
};
