import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
{   path: 'admin',
    component: AdminComponent
},
  {   path: '',
    component: HomeComponent
  }

];
@NgModule({
 exports: [ RouterModule ],
 
  imports: [
    RouterModule.forRoot(routes)
  ],
  
})
export class AppRoutingModule { }
