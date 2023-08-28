import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookmarksComponent} from "./components/bookmarks/bookmarks.component";
import {TodosComponent} from "./components/todos/todos.component";
import {NotesComponent} from "./components/notes/notes.component";
import {AddNotesComponent} from "./components/notes/add-notes/add-notes.component";
import {UnsavedChangesGuard} from "./shared/route-gaurds/unsaved-changes.guard";

const routes: Routes = [
  {
    path: 'bookmarks',
    component: BookmarksComponent,
    data:{
      tab: 1
    }
  },
  {
    path: 'todos',
    component: TodosComponent,
    data:{
      tab: 2
    }
  },
  {
    path: 'notes',
    children:[
      {
        path: '',
        component: NotesComponent,
        data:{
          tab: 3
        }
      },
      {
        path: 'add',
        component: AddNotesComponent,
        canDeactivate:[UnsavedChangesGuard],
      },
      {
        path: 'edit/:id',
        component: AddNotesComponent,
        canDeactivate:[UnsavedChangesGuard],
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
