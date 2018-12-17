import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaPerfilComponent } from './rutas/ruta-perfil/ruta-perfil.component';
import { Ruta404Component } from './rutas/ruta404/ruta404.component';
import { RutaMenuComponent } from './rutas/ruta-menu/ruta-menu.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaGestionUsuariosComponent } from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import { RutaGestionProductosComponent } from './rutas/ruta-gestion-productos/ruta-gestion-productos.component';
import {UsuarioServiceService} from "./servicios/usuario-service.service";
import { RutaVerDetalleUsuarioComponent } from './rutas/ruta-ver-detalle-usuario/ruta-ver-detalle-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaInicioComponent,
    RutaPerfilComponent,
    Ruta404Component,
    RutaMenuComponent,
    RutaLoginComponent,
    RutaGestionUsuariosComponent,
    RutaGestionProductosComponent,
    RutaVerDetalleUsuarioComponent
  ], //web-Componentes  ---> components
  //Aqui se registra los componentes

  imports: [
    BrowserModule, //nos deja usar directivas, event binding, property binding,
    AppRoutingModule //nos deja usar router outlet, rutas erc
  ], //Modulos
  providers: [
    UsuarioServiceService
  ], //Servicios
  bootstrap: [AppComponent] //Componente Principal
})

export class AppModule { }
