import { Router, Routes, RouterModule, NavigationStart, NavigationError } from '@angular/router';
import { CadastrarCliente } from "./pages/cadastro-cliente/Cadastro-Cliente";
import { NgModule } from '@angular/core';
import { AlterarSenha } from './pages/alterar-senha/alterar-senha';
import { CadastrarUsuario} from './pages/cadastro-grupo-usuario/cadastro-usuario';
export const appRoutes: Routes = [

{
path: 'cadastro-cliente',
component: CadastrarCliente 
},{
path:'alterar-senha',
component:AlterarSenha
}, {
path: 'cadastro-usuario',
component: CadastrarUsuario
}

]
@NgModule({
imports: [
RouterModule.forRoot(appRoutes, { useHash: true })
],
exports: [RouterModule]
})
export class AppRoute {
constructor(router: Router) {
}
}