import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`http://localhost:3001/products`)
  }
   get(id:any): Observable<IProduct>{
    return this.http.get<IProduct>(`http://localhost:3001/products/${id}`)
  }
    create(product:IProduct): Observable<IProduct>{
    return this.http.post<IProduct>(`http://localhost:3001/products`, product)
  }
  remove(id:any): Observable<IProduct>{
    return this.http.delete<IProduct>(`http://localhost:3001/products/${id}`)
  }
  edit(product:IProduct): Observable<IProduct>{
    return this.http.put<IProduct>(`http://localhost:3001/products/${product.id}`, product)
  }
}
