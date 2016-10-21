"use strict";
var router_1 = require('@angular/router');
var image_manage_component_1 = require('./image-manage.component');
var project_list_component_1 = require('./project-list.component');
exports.projectRoutes = [
    { path: 'projects', component: project_list_component_1.ProductListComponent },
    { path: 'project/:id', component: image_manage_component_1.ImageManageComponent }
];
exports.projectRouting = router_1.RouterModule.forChild(exports.projectRoutes);
//# sourceMappingURL=project.routing.js.map