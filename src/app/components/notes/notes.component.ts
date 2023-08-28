import {Component, OnInit} from '@angular/core';
import {Note} from "../../shared/models/note.model";
import {NoteService} from "../../shared/services/note.service";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit{

  notes!: Note[];

  constructor(private noteSerice:NoteService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(){
    this.notes = this.noteSerice.getNotes();
  }

}
