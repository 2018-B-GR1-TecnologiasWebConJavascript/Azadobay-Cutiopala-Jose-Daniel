import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-gestion-productos',
  templateUrl: './ruta-gestion-productos.component.html',
  styleUrls: ['./ruta-gestion-productos.component.scss']
})
export class RutaGestionProductosComponent implements OnInit {


  usuario : Producto[] =[
    {
      id:1,
      nombre: 'Laptop'

    },
    {
      id:2,
      nombre: 'USB'

    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Producto {
  nombre?: string;
  id?: number;

}
