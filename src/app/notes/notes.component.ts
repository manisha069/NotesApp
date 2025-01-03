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

  // notesList:any =[];
  newNote:any;
  today:any;
  emptyNote:boolean =false;
  toDeleteIndex :any;
  idCounter:number = 0;
 dataList : any=[];

  inputFunction(){
  this.emptyNote = false;

  }
  
  saveNote(newN:any){
  this.emptyNote = false;

    if(newN != "" && newN != null){
      // this.notesList.push(newN);
      // console.log("noteslist", this.notesList);
      this.newNote = "";
      this.today = Date.now();
      this.dataList.push([this.idCounter, newN]);
      this.idCounter = this.idCounter + 1;
      console.log(this.dataList);
    }
    else{
      this.emptyNote = true;
    }
  }

  deleteNote(){
    console.log("in delete", this.toDeleteIndex);
    console.log("len", this.dataList.length);

    for(let i=0;i< this.dataList.length; i++){
      console.log("index at i", i);
      if((this.dataList[i][0]) === this.toDeleteIndex){
    console.log("in if condition", this.dataList[i], this.dataList[i][0], this.dataList[i][1]);

        this.dataList.splice(i, 1);
        console.log("updated", this.dataList);
        this.closePopup();
        break;
      }
      
    }
    // this.dataList.forEach((item:any)=>{
    //   console.log("item", item);
    //   if (item[0] === this.toDeleteIndex)
    //     this.dataList.splice(this.toDeleteIndex, this.toDeleteIndex+1);
    //     break;
    //     this.closePopup();
    // });

    // let foo_object; // Itemitem(object here) to remove
// this.foo_objects = this.foo_objects.filter(obj => return obj !== foo_object);
  }

  closePopup(){
    let modal = document.getElementById("DeletePopup")!;
    modal.style.display= "none";
    
  }

  deletePopup(num:any){
    this.toDeleteIndex = num;
    console.log("pop up num", num)
    let modal = document.getElementById("DeletePopup")!;
    modal.style.display= "block";
  }
}
