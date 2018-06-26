import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';

@Component(
  {
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
  }
)
export class TodoListComponent {

  @Input()
  todos: Todo[];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  removeAll: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggle: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }

  onToggleTodo(todo: Todo) {
    this.toggle.emit(todo);
  }

  onRemoveAllTodos() {
    this.removeAll.emit();
  }

}
