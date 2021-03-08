import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.scss"],
})
export class AddTodoComponent implements OnInit {
  @Output() addToDo = new EventEmitter();
  newToDoItemName: string;

  constructor() {}

  ngOnInit() {}

  addNewToDoItem() {
    if (this.newToDoItemName) {
      this.addToDo.emit(this.newToDoItemName);
    }
  }
}
