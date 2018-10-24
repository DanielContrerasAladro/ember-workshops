import Ember from 'ember';

export function capitalize([input] /*, hash*/ ) {
    let r = input;

    if (typeof input === 'string') {
        r = input.capitalize();
    }

    if (typeof input === 'object' && typeof input.toString === 'function') {
        r = input.toString().capitalize();
    }

    return Ember.String.htmlSafe(r);
}

export default Ember.Helper.helper(capitalize);