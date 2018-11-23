import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeparmentsComponent } from './deparments/deparments.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectsComponent } from './projects/projects.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddressComponent } from './address/address.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    {path:'',redirectTo:'/departments',pathMatch:'full'}, // default redirecting url
    {path:'departments',component: DeparmentsComponent},
    {path:'employees',component: EmployeesComponent},
    //{path:'projects',component: ProjectsComponent},
    {
    path:'projects/:id',
    component: ProjectsComponent,
    children:[
    {path:'address', component: AddressComponent},
    {path:'contact', component: ContactComponent}
    ]
    
    },
    {path:'**',component: PagenotfoundComponent} // it should be end statment
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const AppRoutingComponent=[
    DeparmentsComponent,
    EmployeesComponent,
    ProjectsComponent,
    PagenotfoundComponent
]