import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts(){
    return [
      {"id":1, "name": "T-Shirts"},
      {"id":2, "name": "Shirts"},
      {"id":3, "name": "Jeans"},
      {"id":4, "name": "Trousers"}
    ];
  }

  constructor() { }
}
