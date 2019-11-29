import { Injectable } from '@angular/core';
import { IVal } from './models/fetchData.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {
  ROOT_URL = './../assets/data.json';
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<IVal[]>(this.ROOT_URL);
  }
}
