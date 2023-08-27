import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookmarksComponent} from "./components/bookmarks/bookmarks.component";
import {TodosComponent} from "./components/todos/todos.component";
import {NotesComponent} from "./components/notes/notes.component";

const routes: Routes = [
  {
    path: 'bookmarks',
    component: BookmarksComponent
  },
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: 'notes',
    component: NotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
