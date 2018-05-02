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
  nombreCancion : String;
  isValid : boolean;
  

  constructor( private cancionesService: CancionesService) { 
    console.log('CancionesComponent constructor');
    //inicializar atributos
    this.nombreCancion = "";
    this.isValid = false;
    this.canciones = [];
    this.cancionSeleccionada = new Cancion(-1,"");   
    //this.mockData();
  }

  ngOnInit() {
    console.log('CancionesComponent ngOnInit');
    //llamadas a los servicios
    this.recargar();
  }// ngOnInit

  recargar(){
    this.canciones = [];
    this.cancionesService.getAll().subscribe(
      result=>{
        console.log('response correcto %o', result);
        //let cancion: Cancion;
        if (result != null){
          result.forEach( element => {
            
            this.canciones.push( element );
        
        });
      }
        
      },
      error=>{
        console.warn(error);
      }
    );
  } 

  eliminar( id: number ){
    console.log(`CancionesComponent eliminar ${id}`);
    if (confirm("¿Quieres eliminar la cancion?")){
      console.log(`ELIMINAR!!!!!!`);
      this.cancionesService.delete(id).subscribe(
        result=>{
          this.recargar();
          console.log('Cancion eliminada');
        },error=>{
          console.warn('Error al eliminar ${error}');
        }
      );
    }
  } // Eliminar

  crearCancion(nombre:String){
    
    console.log(`CancionesComponent crearCancion ${this.nombreCancion}`);
    if (this.nombreCancion.trim().length > 0){
      this.isValid=false;
      this.nombreCancion = this.nombreCancion.trim();
      console.debug('crearCancion ${this.nombreCancion}');
      this.cancionesService.crear(this.nombreCancion).subscribe(
        result=>{
          this.recargar();
          console.log('Cancion eliminada');
        },error=>{
          console.warn('Error al crear ${error}');
        }
      );
    }else{
      this.isValid=true;
      console.warn('Nombre de cancion vacio o incorrecto');
    }
     
  }


  modificar(index:number){let cancion = this.canciones[index];
    console.log('Nombre modificado');
    if (cancion.nombre.trim().length > 0){
      this.cancionesService.modificar(cancion).subscribe(
        result=>{
          this.recargar();
          console.log('Cancion eliminada');
        },error=>{
          console.warn('Error al crear ${error}');
        }
      );
    }else{
      console.warn('Nombre de cancion NO modificado');
    }

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