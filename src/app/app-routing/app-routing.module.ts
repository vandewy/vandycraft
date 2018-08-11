import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from '../projects/projects.component';
import {AboutComponent} from '../about/about.component';



const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'projects', component: ProjectsComponent },
  { path: '', redirectTo: 'about', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule],
})
export class AppRoutingModule { }
