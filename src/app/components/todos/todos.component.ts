import { Component } from '@angular/core';
import {Todo} from "../../shared/models/todo.model";
import {TodoService} from "../../shared/services/todo.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [
      trigger('todoItemAnim',[
          transition(':leave',[
              animate(280,style({
                opacity: 0,
                height: 0,
                marginBottom:0
              }))
          ])
      ])
  ]
})
export class TodosComponent {

  todos!:Todo[];

  constructor(private todoService:TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
    this.todos = this.todoService.getAll();
  }

  toggleTodo(todo: Todo) {
    this.todoService.update(todo.id,{
      completed: !todo.completed
    });
  }

  trackById(index:number, item:Todo){
    return item.id;
  }



}
