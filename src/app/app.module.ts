import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesIndexComponent } from './pages/notes-index/notes-index.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NoteCard1Component } from './note-card1/note-card1.component';
import { NoteDetailsComponent } from './pages/note-details/note-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesIndexComponent,
    MainLayoutComponent,
    NoteCard1Component,
    NoteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
