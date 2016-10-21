import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { projectRouting } from './project.routing';
import { ImageManageComponent } from './image-manage.component';
import {ProductListComponent} from './project-list.component';
import {ProjectService } from './project.service';

@NgModule({
  imports: [
    FormsModule,
    SharedModule,
    projectRouting
  ],
  declarations: [
    ProductListComponent,
    ImageManageComponent

  ],
  providers:[
    ProjectService
  ]
})
export class ProjectModule {}