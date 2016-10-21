"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var project_service_1 = require('./project.service');
//import * as Cropper from 'cropperjs/dist/cropper.js';
require('cropperjs/dist/cropper.js');
var ImageManageComponent = (function () {
    function ImageManageComponent(_route, _router, elementRef, _projectService) {
        this._route = _route;
        this._router = _router;
        this.elementRef = elementRef;
        this._projectService = _projectService;
        this.pageTitle = 'Image Manage';
        this.showSelectedImage = false;
        this.disableEdits = true;
        this.files = [];
    }
    ImageManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.project = { projectName: "New Project" };
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this._projectService.getProject(id).subscribe(function (project) { _this.project = project; }, function (error) { return _this.errorMessage = error; });
        });
    };
    ImageManageComponent.prototype.onBack = function () {
        this._router.navigate(['welcome']);
    };
    ImageManageComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ImageManageComponent.prototype.onEditClick = function () {
        if (this.cropper != null)
            this.cropper.destroy();
        var image = this.elementRef.nativeElement.querySelector('#selectedImage');
        this.cropper = new Cropper(image, {
            aspectRatio: 1,
            scalable: false,
            dragMode: 'move',
            background: false,
            autoCrop: false,
            crop: function (e) {
                console.log(e.detail.x);
                console.log(e.detail.y);
                console.log(e.detail.width);
                console.log(e.detail.height);
                console.log(e.detail.rotate);
                console.log(e.detail.scaleX);
                console.log(e.detail.scaleY);
            }
        });
        this.disableEdits = false;
        //image.addEventListener('cropend',this.onShowCropped);
    };
    ImageManageComponent.prototype.onCropClick = function () {
        this.cropper.crop();
    };
    ImageManageComponent.prototype.onShowCropped = function () {
        this.croppedImageSrc = this.cropper.getCroppedCanvas().toDataURL();
        this.project.filesSrc.push(this.croppedImageSrc);
        document.getElementById("openModalButton").click();
        //let editedImage = this.elementRef.nativeElement.querySelector('#croppedImage');
        //editedImage.src=this.croppedImageSrc;
    };
    ImageManageComponent.prototype.onZoomInClick = function () {
        this.cropper.zoom(0.1);
    };
    ImageManageComponent.prototype.onZoomOutClick = function () {
        this.cropper.zoom(-0.1);
    };
    ImageManageComponent.prototype.onRotateRightClick = function () {
        this.cropper.rotate(90);
    };
    ImageManageComponent.prototype.onRotateLeftClick = function () {
        this.cropper.rotate(-90);
    };
    ImageManageComponent.prototype.onMoveLeft = function () {
        this.cropper.move(-10, 0);
    };
    ImageManageComponent.prototype.onMoveRight = function () {
        this.cropper.move(10, 0);
    };
    ImageManageComponent.prototype.onMoveUp = function () {
        this.cropper.move(0, -10);
    };
    ImageManageComponent.prototype.onMoveDown = function () {
        this.cropper.move(0, 10);
    };
    ImageManageComponent.prototype.onFlipHor = function () {
        this.cropper.scaleX(-1);
    };
    ImageManageComponent.prototype.onFlipVirt = function () {
        this.cropper.scaleY(-1);
    };
    ImageManageComponent.prototype.onSelectImage = function (_selectedImageSrc) {
        if (this.cropper != null)
            this.cropper.destroy();
        this.showSelectedImage = true;
        this.selectedImageSrc = _selectedImageSrc;
        document.getElementById("openModalButton").click();
        this.disableEdits = true;
    };
    // This is called when the user selects new files from the upload button
    ImageManageComponent.prototype.fileChange = function (input) {
        var _this = this;
        // Loop through each picture file
        for (var i = 0; i < input.files.length; i++) {
            this.files.push(input.files[i]);
            // Create an img element and add the image file data to it
            var img = document.createElement("img");
            //img.src = window.URL.createObjectURL(input.files[i]);
            // Create a FileReader
            var reader = new FileReader();
            // Add an event listener to deal with the file when the reader is complete
            reader.addEventListener("load", function (event) {
                // Get the event.target.result from the reader (base64 of the image)
                img.src = event.target.result;
                // img.src =reader.result;
                // Resize the image
                var resized_img = _this.resize(img);
                // Push the img src (base64 string) into our array that we display in our html template
                _this.project.filesSrc.push(event.target.result);
            }, false);
            reader.readAsDataURL(input.files[i]);
        }
    };
    ImageManageComponent.prototype.resize = function (img, MAX_WIDTH, MAX_HEIGHT) {
        if (MAX_WIDTH === void 0) { MAX_WIDTH = 300; }
        if (MAX_HEIGHT === void 0) { MAX_HEIGHT = 300; }
        var canvas = document.createElement("canvas");
        console.log("Size Before: " + img.src.length + " bytes");
        var width = img.width;
        var height = img.height;
        if (width > height) {
            if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
            }
        }
        else {
            if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height;
                height = MAX_HEIGHT;
            }
        }
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        var dataUrl = canvas.toDataURL('image/jpeg');
        // IMPORTANT: 'jpeg' NOT 'jpg'
        console.log("Size After:  " + dataUrl.length + " bytes");
        return dataUrl;
    };
    ImageManageComponent = __decorate([
        core_1.Component({ templateUrl: 'app/imageManage/image-manage.component.html' }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, core_1.ElementRef, project_service_1.ProjectService])
    ], ImageManageComponent);
    return ImageManageComponent;
}());
exports.ImageManageComponent = ImageManageComponent;
//# sourceMappingURL=image-manage.component.js.map