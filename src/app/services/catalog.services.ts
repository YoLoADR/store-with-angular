import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Catalog } from '../catalog';
import { CATALOG } from './mock-data-catalog';


@Injectable()
export class CatalogService {

  private headers = new Headers({'Content-Type': 'application/json'});

  private productsUrl = 'api/products';

  catalog: Catalog[] = CATALOG;

  constructor(private http: Http) {}

  getCatalog(): Promise<Catalog[]> {
    return Promise.resolve(CATALOG);
  }

  /* ------------------ */

  getProducts(): Promise<Catalog[]> {
    return this.http.get(this.productsUrl)
               .toPromise()
               .then(response => response.json().data as Catalog[])
               .catch(this.handleError);
  }

  create(title: string, description: string, image: string, category:string): Promise<Catalog> {
    return this.http
      .post(this.productsUrl, JSON.stringify({title: title, description: description, image: image, category:category}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(_id: number): Promise<void> {
    const url = `${this.productsUrl}/${_id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
