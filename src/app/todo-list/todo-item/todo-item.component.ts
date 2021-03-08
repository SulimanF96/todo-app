import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo;
  @Output() todoIsDeleted = new EventEmitter();
  @Output() todoIsDone = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  makeTodoDone(){
    this.todoIsDone.emit(this.todo.id);
  }

  deleteToDo(){
   this.todoIsDeleted.emit(this.todo.id);
  }

}
