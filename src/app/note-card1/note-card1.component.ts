import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-note-card1',
  templateUrl: './note-card1.component.html',
  styleUrls: ['./note-card1.component.scss']
})
export class NoteCard1Component implements OnInit {

  @Input()title!: string;
  @Input()body!: string; 
  @Input()link!: number;

  @ViewChild('truncator')truncator!: ElementRef<HTMLElement>;
  @ViewChild('bodyText') bodyText!: ElementRef<HTMLElement>;


  constructor(private renderer: Renderer2) { }

  ngOnInit():void{   

}
}