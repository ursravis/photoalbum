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
var forms_1 = require('@angular/forms');
var shared_module_1 = require('../shared/shared.module');
var project_routing_1 = require('./project.routing');
var image_manage_component_1 = require('./image-manage.component');
var project_list_component_1 = require('./project-list.component');
var project_service_1 = require('./project.service');
var ProjectModule = (function () {
    function ProjectModule() {
    }
    ProjectModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                shared_module_1.SharedModule,
                project_routing_1.projectRouting
            ],
            declarations: [
                project_list_component_1.ProductListComponent,
                image_manage_component_1.ImageManageComponent
            ],
            providers: [
                project_service_1.ProjectService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectModule);
    return ProjectModule;
}());
exports.ProjectModule = ProjectModule;
//# sourceMappingURL=project.module.js.map