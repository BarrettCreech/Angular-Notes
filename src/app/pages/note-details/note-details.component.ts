import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  note: Note = new Note;
  noteId: number = 1;
  new!: boolean;

  constructor(private notesService: NotesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
    console.log(this.note);
    this.route.params.subscribe((params: Params) => {
      console.log("params: "+ JSON.stringify(params))
      console.log("params.id: "+ params.id)
      
      if (params.id) {
        this.note = this.notesService.get(params.id);
        this.noteId = params.id;
        this.new = false;
      }else{
        this.new = true;
      };
      console.log("params: "+ JSON.stringify(params))
      console.log("params.id: "+ params.id);
      console.log("is it new?" + this.new);
    })

    
  }

  onSubmit(form: NgForm){    

    if(this.new){
      this.notesService.add(form.value);
      }else{
      
      this.notesService.update(this.noteId, form.value.title, form.value.body);
    }
    
    this.router.navigateByUrl('/');
  };

  cancel(){
    this.router.navigateByUrl('/');
  }

}
