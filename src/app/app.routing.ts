import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
 
//importando os componentes do projeto
import { ClienteCadastroComponent } from "./cliente-cadastro/cliente-cadastro.component";
import { ClienteConsultaComponent } from "./cliente-consulta/cliente-consulta.component";
import { ClienteEdicaoComponent } from "./cliente-edicao/cliente-edicao.component";

import { LoginComponent } from "./login/login.component";
import { CriarContaComponent } from "./criar-conta/criar-conta.component";
import { RecuperarSenhaComponent } from "./recuperar-senha/recuperar-senha.component";
 


 
//mapeamento das rotas
const routes: Routes = [
    { path: 'cliente-cadastro', component: ClienteCadastroComponent },
    { path: 'cliente-consulta', component: ClienteConsultaComponent },
    { path: 'cliente-edicao/:idCliente', component: ClienteEdicaoComponent },  
    { path: '', pathMatch: 'full',  redirectTo: 'cliente-consulta'},
    { path: 'login', component: LoginComponent },
    { path: 'criar-conta', component: CriarContaComponent },
    { path: 'recuperar-senha', component: RecuperarSenhaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'login' },  
];
 
//registrando a configuração
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
 
export class AppRoutingModule {}
 
 


