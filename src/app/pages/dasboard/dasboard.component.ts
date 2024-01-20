import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../interfaces/note';
import { DashboardCardComponent } from '../../components/dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-dasboard-card',
  standalone: true,
  imports: [RouterModule, DashboardCardComponent],
  templateUrl: './dasboard.component.html',
  styleUrl: './dasboard.component.scss'
})
export class DasboardComponent implements OnInit{
  notesService = inject(NotesService);
  allNotes: Note[] | undefined;
  
  ngOnInit(): void {
    this.notesService.getNotes()
    .subscribe((notes: Note[]) => {
      this.allNotes = notes;
    })
  }

}
