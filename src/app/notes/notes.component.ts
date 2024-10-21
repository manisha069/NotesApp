import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {

  notesList:any =[];
  newNote:any;
  
  saveNote(newN:any){
    this.notesList.push(newN);
    console.log("noteslist", this.notesList);
    this.newNote = "";
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
