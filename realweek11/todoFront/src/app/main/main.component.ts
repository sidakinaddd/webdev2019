import { Component, OnInit } from '@angular/core';
import { ProviderService } from './services/provider.service';
import { ITaskList } from './models/todo';
import {ITask} from './models/todo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public tasklist: ITaskList[]=[];
  public loading = false;
  
  public tasks: ITask[]=[]; 

  public name: any='';


  constructor(private provider: ProviderService) { }

  ngOnInit() {
    this.provider.getTaskList().then(res =>{
      this.tasklist = res;
      setTimeout( () => {
        this.loading=true;
      }, 2000);
    });
  }

  getTasks(task: ITaskList){
    //this.selected=selected;
    this.provider.getTasks(task).then(res =>{
      this.tasks = res;
    });

  }

  updateTaskList(c: ITaskList){
    this.provider.updateTaskList(c).then(res =>{
      console.log(c.name+'updated');
    });
  }

  deleteTaskList(c: ITaskList){
    this.provider.deleteTaskList(c.id).then(res => {
      console.log(c.name + 'deleted');
      this.provider.getTaskList().then( res => {
        this.tasklist = res;
      })
    })
  }

  createTaskList(){
    if(this.name !== '') {
    this.provider.createTaskList(this.name).then( res => {
      this.name = '';
      this.tasklist.push(res);
      })
    }
  }

}