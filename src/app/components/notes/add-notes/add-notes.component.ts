import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Note} from "../../../shared/models/note.model";
import {NoteService} from "../../../shared/services/note.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit{

  addNoteReactiveForm!: FormGroup;

  constructor(private fb:FormBuilder, private noteService:NoteService,private router:Router) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.addNoteReactiveForm = this.fb.group({
      title: this.fb.control(null,[Validators.required]),
      content: this.fb.control(null)
    })
  }

  onFormSubmit() {
    if(this.addNoteReactiveForm.valid){
      const note = new Note(this.addNoteReactiveForm.value.title,this.addNoteReactiveForm.value.content);
      this.noteService.addNote(note);
      this.addNoteReactiveForm.reset();
      this.router.navigateByUrl('/notes');

    }
  }


}
