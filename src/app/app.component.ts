import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolist';

  tasks:any = [];

  newtask(task:string):void {
    if( task.trim() != ""){
      this.tasks.push({
        id:Date.now(),
        name:task.trim(),
      });
    }
  }

  removeTask(id:number):void {
    this.tasks = this.tasks.filter((task:any) => task.id !== id);
  }

  removeAll(){
    this.tasks = [];
  }

  
}
