import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ICategory } from '../models/icategory';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiCategoriesService {

  constructor(private httpClient:HttpClient) { }


  getAllCategoriess():Observable<ICategory[]>{
    return this.httpClient.get<ICategory[]>(`${environment.baseURL}/catergories`);
  }
}

