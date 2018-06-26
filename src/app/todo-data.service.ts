import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoDataService {

  constructor(private api: ApiService) { }

  // POST /api/tasks
  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  // DELETE /api/tasks/:id
  deleteTodoById(todoId: number): Observable<Todo> {
    return this.api.deleteTodoById(todoId);
  }

  // DELETE /api/tasks/:id
  deleteAllTodos(): Observable<Todo> {
    return this.api.deleteAllTodos();
  }

  // PUT /api/tasks/:id
  updateTodo(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  // GET /api/tasks
  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  // GET /api/tasks/:id
  getTodoById(todoId: number): Observable<Todo> {
    return this.api.getTodoById(todoId);
  }

  // Toggle
  toggleTodo(todo: Todo) {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }
}
