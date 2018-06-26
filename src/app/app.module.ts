import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ApiService } from './api.service';
import { TodoDataService } from './todo-data.service';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListAddComponent } from './todo-list-add/todo-list-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [TodoDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
