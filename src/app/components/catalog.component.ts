import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Catalog }            from '../catalog';
import { CatalogService }     from './../services/catalog.services';

@Component({
  moduleId: module.id,
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls:  ['./catalog.component.css'],
  providers: [CatalogService]
})
export class CatalogComponent implements OnInit{
  catalog: Catalog[];
  products: Catalog[];
  category = ["watch", "parfume"];
  images = ["http://lorempicsum.com/nemo/350/200/1", "http://lorempicsum.com/simpsons/350/200/1"];

  constructor(private catalogService: CatalogService,
  private router: Router) {}

  getCatalog(): void {
    this.catalogService.getCatalog().then(catalog => {
    this.catalog = catalog;
    });
  }

  getProducts(): void {
    this.catalogService
        .getProducts()
        .then(products => {
          this.products = products;
        });
  }

  add(title: string, description: string, image: string, category:string): void {
    title = title.trim();
    description = description.trim();
    image = image.trim();
    category = category.trim();
    if (!title) { return; }
    this.catalogService.create(title, description, image, category)
      .then(product => {
        this.products.push(product);
      });
  }

  delete(product: Catalog): void {
    this.catalogService
        .delete(product._id)
        .then(() => {
          this.products = this.products.filter(h => h !== product);
        });
  }

  ngOnInit(): void {
     this.getCatalog();
     this.getProducts();
  }


}
