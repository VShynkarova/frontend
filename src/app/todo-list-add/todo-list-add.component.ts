import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-add',
  templateUrl: './todo-list-add.component.html',
  styleUrls: ['./todo-list-add.component.css']
})
export class TodoListAddComponent {
  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  newTodo: Todo = new Todo();
  addMode = false;

  constructor() { }

  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
    this.addMode = !this.addMode;
  }

}
