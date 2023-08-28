import { Component } from '@angular/core';
import {Todo} from "../../shared/models/todo.model";
import {TodoService} from "../../shared/services/todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

  todos!:Todo[];

  constructor(private todoService:TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
    this.todos = this.todoService.getTodos();
  }

  toggleTodo(todo: Todo) {
    this.todoService.updateTodo(todo.id,{
      completed: !todo.completed
    });
  }


}
