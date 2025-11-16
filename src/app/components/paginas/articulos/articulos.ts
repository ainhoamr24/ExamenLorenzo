import { Component } from '@angular/core';
import { Articulo } from '../../../models/articulo';
import { ARTICULOS } from '../../../models/articulosData';
import { articuloComponent } from "../../ui/c-articulo/c-articulo";

@Component({
  selector: 'articulos',
  imports: [articuloComponent],
  templateUrl: './articulos.html',
  styleUrl: './articulos.scss'
})
export class Articulos {


  articulos: Articulo[] = ARTICULOS;
  info(){
    console.log(this.articulos);
    console.log(ARTICULOS);
  }
  removearticulo(id: string) {
    this.articulos.splice(this.articulos.findIndex((articulo: { id: string; }) => articulo.id === id), 1);
    console.log(`Artículo con ID ${id} eliminado.`);
  }
}