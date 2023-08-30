import { Injectable } from '@angular/core';
import {Todo} from "../models/todo.model";
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class TodoService extends DataService<Todo>{

  // override data:Todo[] = [
  //     new Todo("Complete your homework"),
  //     new Todo("Go to Gym"),
  // ];
  //
  // getTodos():Todo[]{
  //   return this.todos;
  // }
  //
  // getTodo(id:string){
  //   return this.todos.find(t => id === t.id);
  // }
  //
  // addTodo(todo: Todo){
  //   this.todos.push(todo);
  // }
  //
  // updateTodo(id:string, updatedFields: Partial<Todo>){
  //   const todo = this.getTodo(id);
  //   if(todo){
  //     Object.assign(todo,updatedFields);
  //   }
  // }
  //
  // deleteTodo(id:string){
  //   const todoIndex = this.todos.findIndex(t=> t.id===id);
  //   if(todoIndex == -1) return;
  //   this.todos.splice(todoIndex,1);
  // }


}
