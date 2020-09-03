import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {InfoPagina} from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  info: InfoPagina  = {};
  cargada: boolean = false;
  equipo:any;

  constructor( private http: HttpClient) { 
    
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    
    //Leer archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp:InfoPagina) => { //resp saca todo el archivo JSON para poder seleccionar.
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-546f1.firebaseio.com/equipo.json')
      .subscribe((resp:any) => { //resp saca todo el archivo JSON para poder seleccionar.
        
        this.equipo = resp;
        //console.log(resp);
      });
  }


}
