import {bindable} from 'aurelia-framework';
import './sex-input.scss';
export class SexInputCustomElement {

    sexOptions = ['male', 'female'];
    @bindable value;
    @bindable disabled;

    constructor() {

    }

    activate() {

    }
}
