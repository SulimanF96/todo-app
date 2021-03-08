import { Component, OnInit } from "@angular/core";
import { TodoListService } from "./todo-list.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
  todoList: any[];

  constructor(private todoListService: TodoListService) {}

  ngOnInit() {
    this.getAllTodoList();
  }

  getAllTodoList() {
    this.todoList = [];
    this.todoListService.getAllTodoList().subscribe((todoList: []) => {
      this.todoList = todoList;
    });
  }

  deleteToDo(todoId) {
    this.todoList = this.todoList.filter((todo) => todo["id"] != todoId);
  }

  addNewToDoItem(todoItemName) {
    this.todoList.push({
      id: this.todoList.length + 1,
      name: todoItemName,
      done: false,
    });
    this.sortTodoList();
  }

  makeTodoDone(todoId) {
    let indexOfTodo = this.todoList.findIndex((todo) => todo.id == todoId);
    this.todoList[indexOfTodo]["done"] = true;
    this.sortTodoList();
  }

  sortTodoList() {
    this.todoList = this.todoList.sort((a, b) => {
      return a.done - b.done;
    });
  }
}
