import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response } from '@angular/http';
import { Todo } from './todo';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  public getAllTodos(): Observable<Todo[]> {
    return this.http
      .get(API_URL + '/api/tasks/')
      .map(response => {
        const todos = response.json();
        return todos.map((todo) => new Todo(todo));
      })
      .catch(this.handleError);
  }

  public createTodo(todo: Todo): Observable<Todo> {
    return this.http
      .post(API_URL + '/api/tasks/', todo)
      .map(response => {
        return new Todo(response.json());
      })
      .catch(this.handleError);
  }

  public getTodoById(todoId: number): Observable<Todo> {
    return this.http
      .get(API_URL + '/api/tasks/' + todoId)
      .map(response => {
        return new Todo(response.json());
      })
      .catch(this.handleError);
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return this.http
      .put(API_URL + '/api/tasks/' + todo.id + '/', todo)
      .map(response => {
        return new Todo(response.json());
      })
      .catch(this.handleError);
  }

  public deleteTodoById(todoId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/api/tasks/' + todoId)
      .map(response => null)
      .catch(this.handleError);
  }

  public deleteAllTodos(): Observable<null> {
    return this.http
      .delete(API_URL + '/api/tasks/')
      .map(response => null)
      .catch(this.handleError);
  }


  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
