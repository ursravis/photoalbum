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
import { BSModalContainer } from './modal-container.component';
import { BSMessageModal, BSMessageModalTitle, BSMessageModalBody, BSModalFooter } from './message-modal.component';
export var providers = [
    { provide: BaseModal, useClass: Modal },
    { provide: Modal, useClass: Modal }
];
export var BootstrapModalModule = (function () {
    function BootstrapModalModule() {
    }
    BootstrapModalModule.getProviders = function () {
        return providers;
    };
    BootstrapModalModule.decorators = [
        { type: NgModule, args: [{
                    imports: [ModalModule, CommonModule],
                    declarations: [
                        BSModalFooter,
                        BSMessageModalTitle,
                        BSMessageModalBody,
                        BSMessageModal,
                        BSModalContainer
                    ],
                    providers: providers,
                    entryComponents: [
                        BSModalContainer,
                        BSMessageModal
                    ]
                },] },
    ];
    /** @nocollapse */
    BootstrapModalModule.ctorParameters = [];
    return BootstrapModalModule;
}());
//# sourceMappingURL=bootstrap.module.js.map