import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';

/* Feature Modules */
import { ProductModule } from './products/product.module';
import { ProjectModule } from './imageManage/project.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ProductModule,
    ProjectModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
