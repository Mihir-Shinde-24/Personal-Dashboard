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
import { AddTodoComponent } from './components/todos/add-todo/add-todo.component';
import { AddBookmarkComponent } from './components/bookmarks/add-bookmark/add-bookmark.component';
import { ManageBookmarksComponent } from './components/bookmarks/manage-bookmarks/manage-bookmarks.component';
import { NotificationComponent } from './components/utility-components/notification/notification.component';
import {HttpClientModule} from "@angular/common/http";

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
    TodoItemComponent,
    AddTodoComponent,
    AddBookmarkComponent,
    ManageBookmarksComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
