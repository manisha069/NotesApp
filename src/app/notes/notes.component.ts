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
  emptyNote:boolean =false;

  inputFunction(){
  this.emptyNote = false;

  }
  
  saveNote(newN:any){
  this.emptyNote = false;

    if(newN != "" && newN != null){
      this.notesList.push(newN);
      console.log("noteslist", this.notesList);
      this.newNote = "";
      this.today = Date.now();

    }
    else{
      this.emptyNote = true;
    }
  }

  deleteNote(doc:any){
    console.log("in delete", doc);
    this.notesList.forEach((item:any, index:any)=>{
      if (item === doc)
        this.notesList.splice(index, 1);
    });

    // let foo_object; // Itemitem(object here) to remove
// this.foo_objects = this.foo_objects.filter(obj => return obj !== foo_object);
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
