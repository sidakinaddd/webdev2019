import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  tasklists = [{title:'t1'}]
  selectedTaskList;
  constructor(private api:ApiService){
    this.getTaskLists();
    this.selectedTaskList={id:'',name:''}
  }
  getTaskLists = () => {
    this.api.getAllTaskLists().subscribe(
      data=>{
        this.tasklists=data;
      },
      error => {
        console.log(error)
      }
    )
  }

  tasklistClicked = (tasklist)=>{
    this.api.getOneTaskList(tasklist.id).subscribe(
      data=>{
        this.selectedTaskList=data;
      
      },
      error => {
        console.log(error)
      }
    )
  }

  updateTaskList= ()=>{
    this.api.updateTaskList(this.selectedTaskList).subscribe(
      data=>{
        this.getTaskLists()
      
      },
      error => {
        console.log(error)
      }
    )
  }
  createTaskList= ()=>{
    this.api.createTaskList(this.selectedTaskList).subscribe(
      data=>{
        this.tasklists.push(data);
      
      },
      error => {
        console.log(error)
      }
    )
  }

  deleteTaskList= ()=>{
    this.api.deleteTaskList(this.selectedTaskList.id).subscribe(
      data=>{
        this.getTaskLists();
      
      },
      error => {
        console.log(error)
      }
    )
  }
}
