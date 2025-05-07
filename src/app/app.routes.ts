import { Routes } from '@angular/router';
import { HomepageComponent } from './shared/pages/homepage/homepage.component';
import { LoginComponent } from './shared/pages/login/login.component';
import { AdminComponent } from './shared/pages/admin/admin.component';
import { AuthGuard } from './auth.guard'; // Importe o guard
import { CadastrarProdutoComponent } from './shared/_components/cadastrar-produto/cadastrar-produto.component';
import { EditarApagarProdutoComponent } from './shared/_components/editar-apagar-produto/editar-apagar-produto.component';

export const routes: Routes = [
    {
        path: "",
        component: HomepageComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "admin",
        component: AdminComponent,
        canActivate: [AuthGuard] // Protege a rota com o guard
    },
    {
        path: "cadastrar-produto",
        component: CadastrarProdutoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "editar-apagar-produto",
        component: EditarApagarProdutoComponent,
        canActivate: [AuthGuard]
    }

];