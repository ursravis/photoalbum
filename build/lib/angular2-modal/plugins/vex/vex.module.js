/**
 * angular2-modal - Angular2 Modal (dialog) window.
 * @version v2.0.1
 * @link https://github.com/shlomiassaf/angular2-modal
 * @license MIT
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule, Modal as BaseModal } from "angular2-modal";
import { Modal } from './modal';
import { DialogFormModal, FormDropIn, VEXDialogButtons } from './dialog-form-modal';
export var providers = [
    { provide: BaseModal, useClass: Modal },
    { provide: Modal, useClass: Modal }
];
export var VexModalModule = (function () {
    function VexModalModule() {
    }
    VexModalModule.getProviders = function () {
        return providers;
    };
    VexModalModule.decorators = [
        { type: NgModule, args: [{
                    imports: [ModalModule, CommonModule],
                    declarations: [
                        VEXDialogButtons,
                        FormDropIn,
                        DialogFormModal
                    ],
                    providers: providers,
                    entryComponents: [
                        DialogFormModal,
                        FormDropIn
                    ]
                },] },
    ];
    /** @nocollapse */
    VexModalModule.ctorParameters = [];
    return VexModalModule;
}());
//# sourceMappingURL=vex.module.js.map