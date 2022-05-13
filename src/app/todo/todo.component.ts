// import { ValueConverter } from '@angular/compiler/src/render3/view/template';
// import { find, findIndex, takeLast } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Itodo } from '../shared/itodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  
  todoNumber = 0;

  doneNumber = 0;

  showAdd: boolean = true;

  taskString : string = '';

  todolist : Itodo[] = [];

  saveTask(){
    
    this.todolist.splice(0, 0, {Content: this.taskString, IsCompleted: false});
    console.log(this.todolist);

    //更新數字

    this.todoNumber++;

    // filter 一直失敗不知為何
    // this.todoNumber = this.todolist.filter(x => x.IsCompleted = false).length;
    // this.doneNumber = this.todolist.filter(x => x.IsCompleted = true).length;

    this.taskString='';
    
    return console.log(this.todoNumber, this.doneNumber);

  }

  finishTask(index:number){

    this.todolist[index].IsCompleted = !this.todolist[index].IsCompleted;

    if (this.todolist[index].IsCompleted){

      console.log(this.todolist);
      console.log("become True");

      //更新數字

      this.todoNumber--;
      this.doneNumber++;
 
    }
    else if (!this.todolist[index].IsCompleted){

      console.log(this.todolist);
      console.log("become False");

      //更新數字

      this.todoNumber++;
      this.doneNumber--;  

    }

    // filter 一直失敗不知為何
    // this.todoNumber = this.todolist.filter(x => x.IsCompleted = false).length;
    // this.doneNumber = this.todolist.filter(x => x.IsCompleted = true).length;

    return console.log(this.todoNumber, this.doneNumber);

  }

  deleteTask(index: number){

    this.todolist.splice(index, 1);
    console.log(this.todolist);

    //更新數字

    this.todoNumber--;
    this.doneNumber--;

    //避免變負數

    if (this.todoNumber < 0){
      this.todoNumber++;
    }
    else if (this.doneNumber < 0){
      this.doneNumber++;
    }

    // filter 一直失敗不知為何
    // this.todoNumber = this.todolist.filter(x => x.IsCompleted = false).length;
    // this.doneNumber = this.todolist.filter(x => x.IsCompleted = true).length;

    return console.log(this.todoNumber, this.doneNumber);

  }

  constructor() { }

  ngOnInit() {
  }

}
