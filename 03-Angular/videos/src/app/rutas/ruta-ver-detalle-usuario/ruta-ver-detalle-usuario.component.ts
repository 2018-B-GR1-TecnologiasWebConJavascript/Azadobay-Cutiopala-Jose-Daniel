import { Component, OnInit } from '@angular/core';
import {UsuarioServiceService} from "../../servicios/usuario-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruta-ver-detalle-usuario',
  templateUrl: './ruta-ver-detalle-usuario.component.html',
  styleUrls: ['./ruta-ver-detalle-usuario.component.scss']
})
export class RutaVerDetalleUsuarioComponent implements OnInit {

  usuarios = [];

  constructor(
    private readonly _usuarioService: UsuarioServiceService,
    private readonly _route: ActivatedRoute,
  ) { }

  ngOnInit() {

    const rutaActiva$ = this._route.params;

    rutaActiva$
      .subscribe(
        (parametros) => {
          console.log(parametros);

          const usuarioEncontrado = this._usuarioService
            .buscar(+parametros.idUsuario); // el + es para convertir a numero

          console.log(usuarioEncontrado);
        }
      );
    //Cuando esta listo el web component para mostrarte
    this.usuarios = this._usuarioService.usuarios;
  }


}
