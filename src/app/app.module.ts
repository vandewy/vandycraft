import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
=======
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
>>>>>>> 53e08970a42059f36064ed3d7fbe2c9aad96a6a6
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
