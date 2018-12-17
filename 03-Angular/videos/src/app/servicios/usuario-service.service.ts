import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) //El decorador dice que la clase es de tipo servicio.


export class UsuarioServiceService {

  usuarios: Usuario[] = [
    {
      id: 1,
      nombre: 'Jose'

    },
    {
      id: 2,
      nombre: 'Daniel'

    }
  ];

  registroActual = 3; //para generar e identificador // REC NUM //Record number

  //El constructor sirve para Inyector de Dependencias
  constructor() {

  }

  crear(nuevoUsuario: Usuario) {
    nuevoUsuario.id = this.registroActual;
    this.usuarios.push(nuevoUsuario);
    this.registroActual++;
    return nuevoUsuario;
  }

  eliminar(id: number) {
    const indiceUsuario = this.usuarios.findIndex((usuario) => {
      return usuario.id === id;
    });

    const usuarioBorrado =
      JSON.parse(
        JSON.stringify(
          this.usuarios[indiceUsuario])); //Para crear un clon de la base

    this.usuarios.splice(indiceUsuario, 1);
    return usuarioBorrado;
  }


  actualizar(id: number, usuarioActualizado: Usuario) {
    const indiceUsuario = this.usuarios.findIndex((usuario) => {
      return usuario.id === id;
    });

    this.usuarios[indiceUsuario] = usuarioActualizado;

    return usuarioActualizado;
  }

  buscar(id:number){
    return this.usuarios
      .find((usuario) => usuario.id === id);
  }
}

  export  interface  Usuario{
  nombre?: string;
  id?: number;
  }
