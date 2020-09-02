import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {InfoPagina} from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  info: InfoPagina  = {};
  cargada: boolean = false;

  constructor( private http: HttpClient) { 
    console.log("Servicio de infoPagina listo");
  
    //Leer archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp:InfoPagina) => { //resp saca todo el archivo JSON para poder seleccionar.
        this.cargada = true;
        this.info = resp;
        console.log(resp);
        console.log(resp['twitter']);
      });
  
  }
}
