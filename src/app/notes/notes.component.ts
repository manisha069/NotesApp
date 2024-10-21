import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';


@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {

  notesList:any =[];
  newNote:any;
  today:any;

  saveNote(newN:any){
    this.notesList.push(newN);
    console.log("noteslist", this.notesList);
    this.newNote = "";
    this.today = Date.now();
  }

  deleteNote(doc:any){
    this.notesList.forEach((item:any, index:any)=>{
      if (item === doc)
        this.notesList.splice(index, 1);
    });
  }

  closePopup(){
    let modal = document.getElementById("DeletePopup")!;
    modal.style.display= "none";
    
  }

  deletePopup(){
    let modal = document.getElementById("DeletePopup")!;
    modal.style.display= "block";
  }
}
