import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  tasklists = [{title:'t1'}]
  constructor(private api:ApiService){
    this.getTaskLists();
  }
  getTaskLists=()=>{
    this.api.getAllTaskLists().subscribe(
      data=>{
        this.tasklists=data;
      },
      error =>{
        console.log(error)
      }
    )
  }
}
