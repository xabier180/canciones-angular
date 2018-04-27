import { Component, OnInit } from '@angular/core';

import { CancionesService } from '../providers/canciones.service';
import { Cancion } from '../model/cancion';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {

  //canciones
  canciones : Cancion[]; 
  cancionSeleccionada : Cancion;

  constructor( private cancionesService: CancionesService) { 
    console.log('CancionesComponent constructor');
    //inicializar atributos
    this.canciones = [];
    this.cancionSeleccionada = new Cancion(-1,"");   
    //this.mockData();
  }

  ngOnInit() {
    console.log('CancionesComponent ngOnInit');
    //llamadas a los servicios
    this.cancionesService.getAll().subscribe(
      result=>{
        console.log('response correcto %o', result);
        //let cancion: Cancion;
        result.forEach( element => {
            
            this.canciones.push( element );
        });
        
      },
      error=>{
        console.warn(error);
      }
    );


  }

  eliminar( id: number ){
    console.log(`CancionesComponent eliminar ${id}`);
  }

  mockData(){
    this.canciones.push(new Cancion(1, "Macarena"));
    this.canciones.push(new Cancion(3, "Bethoven"));
    this.canciones.push(new Cancion(4, "La llorona"));
    this.canciones.push(new Cancion(6, "Lose Yourself"));
    this.canciones.push(new Cancion(7, "Enemigo público"));
    this.canciones.push(new Cancion(19, "Salve"));
    this.canciones.push(new Cancion(16, "Grana y oro"));
    this.canciones.push(new Cancion(13, "Iparesc"));
    };

}