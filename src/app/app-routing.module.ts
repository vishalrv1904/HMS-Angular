import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [{ path: 'login', component: LoginComponent }, { path: 'dashboard', component: DashboardComponent }, { path: 'update/:id', component: UpdateComponent },{ path: 'delete/:id', component: DashboardComponent},{ path: 'add/:role', component: AddComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
