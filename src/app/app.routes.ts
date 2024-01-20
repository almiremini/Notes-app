import { Routes } from '@angular/router';
import { DasboardComponent } from './pages/dasboard/dasboard.component';
import { NewNoteComponent } from './pages/new-note/new-note.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NoteComponent } from './pages/note/note.component';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';

export const routes: Routes = [{
    path: '',
    component: DasboardComponent
}, {
    path: 'new-note',
    component: NewNoteComponent
}, {
    path: 'note/:id',
    component: NoteComponent
}, {
    path: 'edit-note',
    component: EditNoteComponent
}, {
    path: '**',
    component: NotFoundComponent
}];
