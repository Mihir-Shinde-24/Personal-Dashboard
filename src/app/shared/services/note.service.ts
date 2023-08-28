import { Injectable } from '@angular/core';
import {Note} from "../models/note.model";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Note[] = [
    new Note('First Title', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ipsam maiores mollitia ratione tenetur, voluptatum!'),
    new Note('Second Title', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ipsam maiores mollitia ratione tenetur, voluptatum!')
  ];

  constructor() { }

  getNotes():Note[]{
    return this.notes;
  }

  getNote(id:string){
    return this.notes.find(n => id === n.id);
  }

  addNote(note: Note){
    this.notes.push(note);
  }

  updateNote(id:string, updatedFields: Partial<Note>){
    const note = this.getNote(id);
    if(note){
      Object.assign(note,updatedFields)
    }
  }

  deleteNote(id:string){
    const noteIndex = this.notes.findIndex(n=> n.id===id);
    if(noteIndex == -1) return;
    this.notes.splice(noteIndex,1);
  }



}
