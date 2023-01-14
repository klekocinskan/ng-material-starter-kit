import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsModel } from '../models/products.model';
import { FormProductsModel } from '../models/products.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {


  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProductsModel[]> {
    return this._httpClient.get<ProductsModel[]>('https://fakestoreapi.com/products');
  }

  getAllCategories(): Observable<string[]> {
    return this._httpClient.get<string[]>('https://fakestoreapi.com/products/categories');
  }

  createNewProduct(newProduct: FormProductsModel): Observable<void> {
      return this._httpClient.post<void>('https://fakestoreapi.com/products',newProduct);
  }

}
