import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-notes-index',
  templateUrl: './notes-index.component.html',
  styleUrls: ['./notes-index.component.scss']
})
export class NotesIndexComponent implements OnInit {

  notes: Note[] = new Array<Note>();
  addButton: boolean = false;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void{
    this.notes = this.notesService.getAll();
    console.log("notes.length oon index page"+ this.notes.length);
    if (this.notes.length<5){
      this.addButton= false;
  }else{
      this.addButton=true;
  }

}
}
