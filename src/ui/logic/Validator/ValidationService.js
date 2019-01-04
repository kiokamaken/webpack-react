import validate from 'validate.js';

export default class ValidationService {
    constructor() {
        elm = new Map;
    }

    registerElm(key, elm) {
        !this.elm.has(key) && this.elm.set(key, elm);
    }

    unregisterElm(key, elm) {
        this.elm.has(key) && this.elm.delete(key);
    }

    hasElm(key) {
        return this.elm.has(key);
    }

    validate(data, constraints) {
        return validate(data, constraints);
    }
}