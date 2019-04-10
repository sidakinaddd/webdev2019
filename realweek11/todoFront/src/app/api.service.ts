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
  getOneTaskList(id): Observable<any>{
    return this.http.get(this.baseurl+"/task_lists/"+id+"/",
    {headers:this.httpHeader});
  }
  updateTaskList(tasklist): Observable<any>{
    const body={id:tasklist.id,name:tasklist.name}
    return this.http.put(this.baseurl+"/task_lists/"+tasklist.id+"/",body,
    {headers:this.httpHeader});
  }
  createTaskList(tasklist): Observable<any>{
    const body={id:tasklist.id,name:tasklist.name}
    return this.http.post(this.baseurl+"/task_lists/",body,
    {headers:this.httpHeader});
  }
  deleteTaskList(id): Observable<any>{
    
    return this.http.delete(this.baseurl+"/task_lists/"+id+'/',
    {headers:this.httpHeader});
  }
}
