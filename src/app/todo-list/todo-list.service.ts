import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private httpClient: HttpClient) { }

  getAllTodoList() {
    return this.httpClient.get("assets/todo-list.json");
  }

}
