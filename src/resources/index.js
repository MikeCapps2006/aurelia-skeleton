import {PLATFORM} from 'aurelia-pal';

export function configure(config) {
    config.globalResources([
        PLATFORM.moduleName('./elements/error-list/error-list.html'),
        PLATFORM.moduleName('./elements/input-slider/input-slider'),
        PLATFORM.moduleName('./elements/phone-input/phone-input.html'),
        PLATFORM.moduleName('./elements/postal-input/postal-input.html'),
        PLATFORM.moduleName('./elements/sex-input/sex-input'),
        PLATFORM.moduleName('./elements/state-input/state-input'),

        // Value Converters
        PLATFORM.moduleName('./value-converters/crypto-name-formatter'),
        PLATFORM.moduleName('./value-converters/currency-formatter'),
        PLATFORM.moduleName('./value-converters/date-formatter'),
        PLATFORM.moduleName('./value-converters/format-html'),
        PLATFORM.moduleName('./value-converters/format-from-html'),
        PLATFORM.moduleName('./value-converters/full-name'),
        PLATFORM.moduleName('./value-converters/keys'),
        PLATFORM.moduleName('./value-converters/number-formatter'),
        PLATFORM.moduleName('./value-converters/proper-case'),
        PLATFORM.moduleName('./value-converters/time-formatter'),
    ]);
}
