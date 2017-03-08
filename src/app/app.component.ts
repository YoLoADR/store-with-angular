import { Component } from '@angular/core';
import { CatalogComponent } from './components/catalog.component';

@Component({
  selector: 'my-app',
  template: `<h1>Mon site {{name}}</h1> <catalog></catalog>`,
})
export class AppComponent  { name = 'Ecommerce'; }
