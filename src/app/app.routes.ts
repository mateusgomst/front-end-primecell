import { Routes } from '@angular/router';
import { HomepageComponent } from './shared/pages/homepage/homepage.component';
import { LoginComponent } from './shared/pages/login/login.component';
import { AdminComponent } from './shared/pages/admin/admin.component';

export const routes: Routes = [
    {
        path:"",
        component: HomepageComponent
    },
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"admin",
        component: AdminComponent
    }
    
];
