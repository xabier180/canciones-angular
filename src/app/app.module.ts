import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { CancionesComponent } from './canciones/canciones.component';

// Services
import { CancionesService } from './providers/canciones.service';

// Pipes


@NgModule({
  declarations: [
    AppComponent,
    CancionesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CancionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
