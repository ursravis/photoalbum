/**
 * angular2-modal - Angular2 Modal (dialog) window.
 * @version v2.0.1
 * @link https://github.com/shlomiassaf/angular2-modal
 * @license MIT
 */
import { ElementRef, Renderer } from '@angular/core';
import { BaseDynamicComponent, DialogRef } from 'angular2-modal';
import { MessageModalPreset } from './presets/message-modal-preset';
export declare class BSModalContainer extends BaseDynamicComponent {
    dialog: DialogRef<MessageModalPreset>;
    constructor(dialog: DialogRef<MessageModalPreset>, el: ElementRef, renderer: Renderer);
}
