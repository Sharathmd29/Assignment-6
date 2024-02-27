import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserformComponent } from './userform/userform.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,UserformComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignmentt-6';
  numbers$:any=of(1,2,3);
  apiUrl='https://randomuser.me/api/?results=5';
  userData:any=null;
  error:string='';
  btnDemonstrate: any;
  constructor(private http:HttpClient){
  }
 
  
  fetchUser(){
    this.http.get<any>(this.apiUrl).subscribe({
      next:(response)=>{
        this.userData=response.results[0];
        console.log(this.userData);
        this.error="no error";
      },
      error:(err)=>{
        console.log('error fetching user',err);
      }
    })
  }
  ngOnInit(){
    this.numbers$.subscribe({
      next:(value:number)=>console.log('Observable emitted the value:',+value),
      error:(err:any)=>console.log("Error",+err),
      complete:()=>console.log('Complete')
    })
    this.fetchUser();
  }
}
