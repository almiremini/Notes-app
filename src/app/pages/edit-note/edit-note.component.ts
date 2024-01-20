import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Note } from '../../interfaces/note';
import { NotesService } from '../../services/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-note',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.scss'
})
export class EditNoteComponent {
  fb = inject(FormBuilder);
  notesService = inject(NotesService);
  router = inject(Router)
  newNoteForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required]
  })

  submitForm(values: any) {
    const note: Note = {
      title: values.title,
      content: values.content,
      date: new Date()
    }
    this.notesService.createNote(note);
    this.router.navigate(['']);
  }
}
