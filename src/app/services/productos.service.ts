import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Producto} from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos(){

    return new Promise((resolve,reject)=>{
      this.http.get('https://angular-html-546f1.firebaseio.com/productos_idx.json')
      .subscribe((resp:Producto[])=>{
        console.log(resp);
        this.productos = resp;
  
        //setTimeout(()=>{
          this.cargando=false;
        //},2000);
        resolve();
        
      });
    });



    
  }

  getProducto(id:string){
    return this.http.get(`https://angular-html-546f1.firebaseio.com/productos/${id}.json`)
  }

  buscarProducto(termino:string)
  {
    if(this.productos.length === 0){
      this.cargarProductos().then(()=>{
        this.filtrarProductos(termino);
      });
    }else{
      this.filtrarProductos(termino);
    }
    
    
  }

  private filtrarProductos(termino: string){
    
    this.productosFiltrado = [];
    this.productos.forEach(prod => {
      if(prod.categoria.indexOf(termino)>=0 || prod.titulo.indexOf(termino) >= 0){
        this.productosFiltrado.push(prod);
        console.log(this.productosFiltrado);
      }
    })
  }

}
