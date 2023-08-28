import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WhiteSpaceValidator} from "../../../shared/custom-validators/WhiteSpaceValidator";
import {Todo} from "../../../shared/models/todo.model";
import {TodoService} from "../../../shared/services/todo.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements  OnInit{

  id!:string;
  addTodoReactiveForm!:FormGroup;

  constructor(private fb: FormBuilder, private todoService:TodoService, private router:Router,private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeForm();
    this.fetchRouteParam();
  }

  initializeForm(){
    this.addTodoReactiveForm = this.fb.group({
      id: this.fb.control(null),
      text: this.fb.control(null,[Validators.required,Validators.minLength(3),WhiteSpaceValidator.cannotContainSpace]),
      completed: this.fb.control(false)
    })
  }

  fetchRouteParam(){
    this.activatedRoute.params.subscribe(param =>{
      if(param['id']){

        this.id = param['id'];
        this.patchTodoForm(param['id']);
      }
    })
  }

  patchTodoForm(id:string){
    const todo = this.todoService.getTodo(id);
    if(todo){
      this.addTodoReactiveForm.setValue(todo);
    }
    else{
      this.router.navigateByUrl('/todos');
    }
  }


  get idControl(){return this.addTodoReactiveForm.get('id')};
  get textControl(){return this.addTodoReactiveForm.get('text')};
  get completedControl(){return this.addTodoReactiveForm.get('completed')};

  deleteTodo() {

  }

  onFormSubmit() {
    this.addTodoReactiveForm.markAllAsTouched();
    if(this.addTodoReactiveForm.valid){
      if(!this.id){
        const todo = new Todo(this.addTodoReactiveForm.value.text);
        console.log(todo);
        this.todoService.addTodo(todo);
      }
      else{
        this.todoService.updateTodo(this.id,this.addTodoReactiveForm.value);
      }
      this.addTodoReactiveForm.reset();
      this.router.navigateByUrl('/todos');
    }
  }
}
