import {Component, Input} from '@angular/core';
import {Todo} from "../../../shared/models/todo.model";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent  {

  @Input('todo') todo!:Todo;


}
