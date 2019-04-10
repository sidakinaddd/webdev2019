import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl="http://127.0.0.1:8000/apikek";
  httpHeader= new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http: HttpClient) { }

  getAllTaskLists(): Observable<any>{
    return this.http.get(this.baseurl+'/task_lists/',
    {headers:this.httpHeader})
  }
}
