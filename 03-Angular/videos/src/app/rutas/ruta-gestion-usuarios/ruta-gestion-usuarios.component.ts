import {Component, OnInit} from '@angular/core';
import {UsuarioServiceService} from "../../servicios/usuario-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {

  usuarios = [];

  constructor(
    private readonly _usuarioService: UsuarioServiceService,
    private readonly _route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.usuarios = this._usuarioService.usuarios;
  }

  eliminar(usuario) {

    this._usuarioService.eliminar(usuario.id);

  }



}
