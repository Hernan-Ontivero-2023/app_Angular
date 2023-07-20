import { Component } from '@angular/core';

interface Item {
  nombre: string;
  costo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  items: Item[] = [
    { nombre: 'Producto 1', costo: '$10' },
    { nombre: 'Producto 2', costo: '$20' },
    { nombre: 'Producto 3', costo: '$30' }
  ];
  mostrarLista = true;

  toggleList() {
    this.mostrarLista = !this.mostrarLista;
  }
}