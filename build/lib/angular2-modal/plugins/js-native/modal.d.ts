/**
 * angular2-modal - Angular2 Modal (dialog) window.
 * @version v2.0.1
 * @link https://github.com/shlomiassaf/angular2-modal
 * @license MIT
 */
import { ResolvedReflectiveProvider as RRP } from '@angular/core';
import { DialogRef, Maybe, Overlay, Modal as Modal_ } from 'angular2-modal';
import { JSNativePresetBuilder } from './presets/js-native-preset';
export declare class Modal extends Modal_ {
    constructor(overlay: Overlay);
    alert(): JSNativePresetBuilder;
    prompt(): JSNativePresetBuilder;
    confirm(): JSNativePresetBuilder;
    protected create(dialogRef: DialogRef<any>, type: any, bindings?: RRP[]): Maybe<DialogRef<any>>;
}
