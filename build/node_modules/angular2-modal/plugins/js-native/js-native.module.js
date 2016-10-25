/**
 * angular2-modal - Angular2 Modal (dialog) window.
 * @version v2.0.1
 * @link https://github.com/shlomiassaf/angular2-modal
 * @license MIT
 */
import { NgModule } from '@angular/core';
import { Modal as BaseModal } from "angular2-modal";
import { Modal } from './modal';
export var providers = [
    { provide: BaseModal, useClass: Modal },
    { provide: Modal, useClass: Modal }
];
export var JSNativeModalModule = (function () {
    function JSNativeModalModule() {
    }
    JSNativeModalModule.getProviders = function () {
        return providers;
    };
    JSNativeModalModule.decorators = [
        { type: NgModule, args: [{
                    providers: providers
                },] },
    ];
    /** @nocollapse */
    JSNativeModalModule.ctorParameters = [];
    return JSNativeModalModule;
}());
//# sourceMappingURL=js-native.module.js.map