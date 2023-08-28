import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Note} from "../../../shared/models/note.model";
import {NoteService} from "../../../shared/services/note.service";
import {ActivatedRoute, Router} from "@angular/router";
import {WhiteSpaceValidator} from "../../../shared/custom-validators/WhiteSpaceValidator";
import {IDeactivateComponent} from "../../../shared/interfaces/IDeactivateComponent";

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit,IDeactivateComponent{

  id!:string;
  addNoteReactiveForm!: FormGroup;

  constructor(private fb:FormBuilder, private noteService:NoteService,private router:Router, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeForm();
    this.fetchRouteParam();
  }

  fetchRouteParam(){
    this.activatedRoute.params.subscribe(param =>{
      if(param['id']){

        this.id = param['id'];
        this.patchNoteForm(param['id']);
      }
    })
  }

  patchNoteForm(id:string){
    const note = this.noteService.getNote(id);
    if(note){
      this.addNoteReactiveForm.setValue(note);
    }
    else{
      this.router.navigateByUrl('/notes');
    }
  }

  initializeForm(){
    this.addNoteReactiveForm = this.fb.group({
      id: this.fb.control(null),
      title: this.fb.control('',[Validators.required,WhiteSpaceValidator.cannotContainSpace,Validators.minLength(3)]),
      content: this.fb.control('')
    })
  }

  onFormSubmit() {
    console.log(this.addNoteReactiveForm)
    this.addNoteReactiveForm.markAllAsTouched();
    if(this.addNoteReactiveForm.valid){
      if(!this.id){
        const note = new Note(this.addNoteReactiveForm.value.title,this.addNoteReactiveForm.value.content);
        // console.log(note);
        this.noteService.addNote(note);
      }
      else{
          this.noteService.updateNote(this.id,this.addNoteReactiveForm.value);
      }
      this.addNoteReactiveForm.reset();
      this.router.navigateByUrl('/notes');
    }
  }

  canExit(){
    if(this.idControl?.value || this.titleControl?.value || this.contentControl?.value){
      return confirm("You can unsaved changes. Do you want to discard changes?")
    }
    return true;
  }

  get idControl(){return this.addNoteReactiveForm.get('id')}
  get titleControl(){return this.addNoteReactiveForm.get('title')}
  get contentControl(){return this.addNoteReactiveForm.get('content')}

  deleteNote() {
    this.noteService.deleteNote(this.id);
    this.addNoteReactiveForm.reset();
    this.router.navigateByUrl('/notes');
  }
}
