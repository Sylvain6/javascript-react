export function undefinedPropertyError(path, property, object) {
    const instance = new Error(`Property '${property}' not exist for path '${path}', expected one of : ` + JSON.stringify(object));
    Object.setPrototypeOf(
        instance, Object.getPrototypeOf(this)
    );
    if (Error.captureStackTrace) {
        Error.captureStackTrace(instance, undefinedPropertyError);
    }
    return instance;
}

export function undefinedPropertyAccess(props, object) {
    const instance = new Error(`Property '${typeof props}' isn't correctly declared, expected one of : ` + JSON.stringify(object));
    Object.setPrototypeOf(
        instance, Object.getPrototypeOf(this)
    );
    if (Error.captureStackTrace) {
        Error.captureStackTrace(instance, undefinedPropertyError);
    }
    return instance;
}
