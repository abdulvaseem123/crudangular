import { Component } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})
export class AppComponent {
  // title = 'crudangular';
  users=[{title:'test'}]
  constructor (private api:ApiService){
    this.getUsers();
  }
    getUsers=()=>{
      this.api.getAllUsers().subscribe(
          data => {
            this.users=data
            console.log("---------------->",data)
          },
          error => {
            console.log(error)
          }
      )
    }
  
}
