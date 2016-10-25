import { Component, OnInit }  from '@angular/core';

import { IProject } from './project';
import { ProjectService } from './project.service';

@Component({
    templateUrl: 'app/imageManage/project-list.component.html',
    styleUrls: ['app/imageManage/project-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Project List';
   
    errorMessage: string;
    projects: IProject[];

    constructor(private _productService: ProjectService) {

    }

   

    ngOnInit(): void {
           this._productService.getProjects()
                     .subscribe(
                       projects => this.projects = projects,
                       error =>  this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Project List: ' + message;
    }
}
