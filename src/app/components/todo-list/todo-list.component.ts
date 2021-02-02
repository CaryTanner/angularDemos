import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Models/Todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  inputTodo: string = "";
  searchText: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      { content: 'first todo', complete: false },
      { content: 'second best todo', complete: true },
      { content: '3s the magic', complete: false },
      { content: '4', complete: true },
      { content: 'high five', complete: false },
      { content: 'six for kicks', complete: false },
      { content: '7', complete: true },
    ];

    
  }
  toggleDone(id: number): void {
      this.todos.map((value, index) => {
        if(index == id) {
          value.complete = !value.complete
          console.log(value)
          return value
        }
      })
  }
  deleteTodo(id:number){
    this.todos  = this.todos.filter((todo, index) => index !== id)
    return this.todos
  }
  addTodo(){
    this.todos.unshift({
      content: this.inputTodo,
      complete: false
    })
    this.inputTodo = "";
  }
}
