import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Note } from '../../interfaces/note';
import { NotesService } from '../../services/notes.service';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent {
  route = inject(ActivatedRoute);
  notesService = inject(NotesService);
  router = inject(Router)
  noteId: any;
  note: Note | undefined;
  ngOnInit(): void {
    this.route.paramMap.pipe(take(1)).subscribe((param) => {
      this.noteId = param.get('id');

      this.notesService.getNotes()
        .subscribe((notes: Note[]) => {
          this.note = notes[this.noteId]
        })
    })


  }
  deleteNote() {
    this.notesService.deleteNote(this.noteId)
    this.router.navigate(['']);
  }
}