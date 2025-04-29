import { Routes } from '@angular/router';
import { HomepageComponent } from './shared/pages/homepage/homepage.component';
import { LoginComponent } from './shared/pages/login/login.component';

export const routes: Routes = [
    {
        path:"",
        component: HomepageComponent
    },
    {
        path:"login",
        component: LoginComponent
    }
];
