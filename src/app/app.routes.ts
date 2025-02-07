import { Routes } from '@angular/router';
import { LoginComponent } from './pages/pages/login/login.component';
import { RegisterComponent } from './pages/pages/register/register.component';
import { ForgotpassComponent } from './pages/pages/forgotpass/forgotpass.component';
import { ResetpassComponent } from './pages/pages/resetpass/resetpass.component';
import { DashboardComponent } from './pages/pages/dashboard/dashboard.component';

export const routes: Routes = [

    {path: '', redirectTo :'/login', pathMatch :'full'},
    {path: 'login',component:LoginComponent},
    {path : 'register',component:RegisterComponent},
    {path :'forgotpass',component : ForgotpassComponent},
    { path: 'resetpass/:token', component : ResetpassComponent },
    {path : 'dashboard',component:DashboardComponent}
];
