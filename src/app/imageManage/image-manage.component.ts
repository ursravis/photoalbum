import {Component,OnInit,OnDestroy,ElementRef} from '@angular/core'; 
import {ActivatedRoute,Router} from '@angular/router'
import {IProject} from './project';
import {ProjectService} from './project.service';
import { Subscription }       from 'rxjs/Subscription';

//import * as Cropper from 'cropperjs/dist/cropper.js';
require('cropperjs/dist/cropper.js');

@Component({templateUrl:'app/imageManage/image-manage.component.html'})
export class ImageManageComponent implements OnInit,OnDestroy {
    pageTitle:string='Image Manage';
    project:IProject;
    croppedImageSrc :any;
    showSelectedImage:boolean=false;
    selectedImageSrc:string;
    disableEdits:boolean=true;
    private sub:Subscription;
       errorMessage: string;
    constructor(private _route:ActivatedRoute,private _router:Router,private elementRef: ElementRef,private _projectService :ProjectService)
    {

    }
ngOnInit():void{
    this.project={projectName:"New Project"};
     this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                    this._projectService.getProject(id).subscribe(
            project => {this.project = project},
            error => this.errorMessage = <any>error);
        });
}

onBack():void{
    this._router.navigate(['welcome']);
  
}
  ngOnDestroy() {
        this.sub.unsubscribe();
    }
 cropper:Cropper;
onEditClick():void{

 if( this.cropper != null)    
    this.cropper.destroy();
    
   let image = this.elementRef.nativeElement.querySelector('#selectedImage');
        this.cropper = new Cropper(image, {
        aspectRatio:1,
        scalable:false,
        dragMode:'move',
        background:false,
        autoCrop:false,
        crop: function(e) {
            console.log(e.detail.x);
            console.log(e.detail.y);
            console.log(e.detail.width);
            console.log(e.detail.height);
            console.log(e.detail.rotate);
            console.log(e.detail.scaleX);
            console.log(e.detail.scaleY);
 
        }
        });
        this.disableEdits=false;
        //image.addEventListener('cropend',this.onShowCropped);
}
onCropClick():void{
    this.cropper.crop();
}
onShowCropped(): void{
         this.croppedImageSrc=  this.cropper.getCroppedCanvas().toDataURL();
          this.project.filesSrc.push(this.croppedImageSrc);
          document.getElementById("openModalButton").click();
             //let editedImage = this.elementRef.nativeElement.querySelector('#croppedImage');
             //editedImage.src=this.croppedImageSrc;
}
onZoomInClick():void{
    this.cropper.zoom(0.1);
}
onZoomOutClick():void{
    this.cropper.zoom(-0.1);
}
onRotateRightClick():void{
    this.cropper.rotate(90);
}
onRotateLeftClick():void{
    this.cropper.rotate(-90);
}

onMoveLeft():void{
this.cropper.move(-10, 0);
}
onMoveRight():void{
    this.cropper.move(10, 0);
}
onMoveUp():void{
    this.cropper.move(0, -10);
}
onMoveDown():void{
    this.cropper.move(0, 10);
}
onFlipHor():void{
this.cropper.scaleX(-1);
}
onFlipVirt():void{
    this.cropper.scaleY(-1)
}
onSelectImage(_selectedImageSrc:string):void{
    if( this.cropper != null)    
    this.cropper.destroy();
  this.showSelectedImage=true;
this.selectedImageSrc=_selectedImageSrc;
document.getElementById("openModalButton").click();
this.disableEdits=true;
}
files:any[]=[];
    // This is called when the user selects new files from the upload button
    fileChange(input:any){

        // Loop through each picture file
        for (var i = 0; i < input.files.length; i++) {

            this.files.push(input.files[i]);

            // Create an img element and add the image file data to it
            var img = document.createElement("img");
            //img.src = window.URL.createObjectURL(input.files[i]);

            // Create a FileReader
            var reader = new FileReader();

            // Add an event listener to deal with the file when the reader is complete
            reader.addEventListener("load", (event) => {
                // Get the event.target.result from the reader (base64 of the image)
               img.src = event.target.result;
               // img.src =reader.result;

                // Resize the image
                var resized_img = this.resize(img);

                // Push the img src (base64 string) into our array that we display in our html template
                this.project.filesSrc.push(event.target.result);
            }, false);

            reader.readAsDataURL(input.files[i]);
        }
      
    }


    resize (img:any, MAX_WIDTH:number = 300, MAX_HEIGHT:number = 300){
        var canvas = document.createElement("canvas");

        console.log("Size Before: " + img.src.length + " bytes");

        var width = img.width;
        var height = img.height;

        if (width > height) {
            if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
            }
        } else {
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
        console.log("Size After:  " + dataUrl.length  + " bytes");
        return dataUrl
    }

}