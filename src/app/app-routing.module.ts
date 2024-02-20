import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';

const routes: Routes = [{ path: 'home', component: HomeComponent},
{ path: 'login', component: UserAuthenticationComponent},
{path: '', redirectTo: 'home', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
