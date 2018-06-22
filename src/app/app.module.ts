import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoute } from './app.router';
import { CommonModule } from '@angular/common';
import { Menu } from './componentes/menu';
import { CadastrarCliente } from "./pages/cadastro-cliente/Cadastro-Cliente";
import { AlterarSenha } from './pages/alterar-senha/alterar-senha';
import { CadastrarUsuario } from './pages/cadastro-grupo-usuario/cadastro-usuario';
import { MatDatepicker, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
@NgModule({
declarations: [
AppComponent,
Menu,
CadastrarCliente,
AlterarSenha,
CadastrarUsuario
],
imports: [
BrowserModule,
CommonModule,
MaterialModule,
FormsModule,
ReactiveFormsModule,
AppRoute,
BrowserAnimationsModule,
MatDatepickerModule, MatNativeDateModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }