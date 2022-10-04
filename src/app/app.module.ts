import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
 

import { AppComponent } from './app.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { ClienteConsultaComponent } from './cliente-consulta/cliente-consulta.component';
import { ClienteEdicaoComponent } from './cliente-edicao/cliente-edicao.component';
import { LoginComponent } from './login/login.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteCadastroComponent,
    ClienteConsultaComponent,
    ClienteEdicaoComponent,
    LoginComponent,
    CriarContaComponent,
    RecuperarSenhaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
