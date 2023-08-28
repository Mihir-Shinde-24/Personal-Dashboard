import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { TodosComponent } from './components/todos/todos.component';
import { NotesComponent } from './components/notes/notes.component';
import { BookmarkTileComponent } from './components/bookmarks/bookmark-tile/bookmark-tile.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AddNotesComponent } from './components/notes/add-notes/add-notes.component';
import { NoteCardComponent } from './components/notes/note-card/note-card.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TodoItemComponent } from './components/todos/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    TodosComponent,
    NotesComponent,
    BookmarkTileComponent,
    AddNotesComponent,
    NoteCardComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
