import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor(private httpClient:HttpClient) {

   }

  getAllProducts():Observable<IProduct[]>{
  return this.httpClient.get<IProduct[]>(`${environment.baseURL}/products`);
  }

  getProductById(id:number):Observable<IProduct>{
    return this.httpClient.get<IProduct>(`${environment.baseURL}/products/${id}`);
  }

  getProductsByCatId(catId:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.baseURL}/products?categoryid=${catId}`);
  }

  addProduct(newProduct:IProduct):Observable<IProduct>{
   return this.httpClient.post<IProduct>(`${environment.baseURL}/products`,JSON.stringify(newProduct))
  }

  deleteProductById(id:number){
    return this.httpClient.delete(`${environment.baseURL}/products/${id}`);
  }
  updateProductById(id:number,updatedProduct: IProduct):Observable<IProduct>{
  return this.httpClient.put<IProduct>(`${environment.baseURL}/products/${id}`,updatedProduct)
  }
}
