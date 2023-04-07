import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor (private http:HttpClient) {}
  getFeatured(){
    return this.http.get('http://api.upick.ae/featured-groups');
  }
}
