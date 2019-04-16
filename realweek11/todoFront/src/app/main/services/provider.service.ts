import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import { HttpClient } from '@angular/common/http';
import { ITaskList } from '../models/todo';
import { ITask } from '../models/todo';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService{
  constructor(http: HttpClient) {
    super(http); 
   } 


   getTaskList(): Promise<ITaskList[]>{
     return this.get('http://localhost:8000/apikek/task_lists/',{});
   }
   
   getTasks(tasklist: ITaskList): Promise<ITask[]>{
     return  this.get(`http://localhost:8000/apikek/task_lists/${tasklist.id}/tasks/`,{});
   }

   updateTaskList(tasklist: ITaskList): Promise<ITaskList>{
     return this.put(`http://localhost:8000/apikek/task_lists/${tasklist.id}/`,{
       name: tasklist.name
     });
   }

   deleteTaskList(id: number) : Promise<any>{
      return this.delet(`http://localhost:8000/apikek/task_lists/${id}/`,{});
   }

   createTaskList(name: any) : Promise<ITaskList>{
     return this.post(`http://localhost:8000/apikek/task_lists/`, {
       name: name
     });
   }




  }
