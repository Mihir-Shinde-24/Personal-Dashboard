import {Component, Input} from '@angular/core';
import {Todo} from "../../../shared/models/todo.model";
import {TodoService} from "../../../shared/services/todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent  {

  @Input('todo') todo!:Todo;

  constructor(private todoService:TodoService, private router:Router) {}

  deleteTodo() {
      this.todoService.delete(this.todo.id);
      this.router.navigateByUrl('/todos');
  }

}
