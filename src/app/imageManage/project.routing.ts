import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ImageManageComponent } from './image-manage.component';
import {ProductListComponent} from './project-list.component';

export const projectRoutes: Routes = [
  { path: 'projects', component: ProductListComponent },
  {path:'project/:id',component:ImageManageComponent}
];

export const projectRouting: ModuleWithProviders =
                RouterModule.forChild(projectRoutes);