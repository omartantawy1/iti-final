import { Component,Input,Output } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],

})
export class BoardComponent {

  backgroundcolor!: any;

  lists: { id: number; title: string; tasks: string[] }[] = [


  ];
  showAddlistButton: boolean = true;


  addlist() {
     {
      const newlist = {
        id: this.lists.length + 1,
        title: '',
        tasks: [],
      };
      this.lists.push(newlist);
    
    }
  }


  onlistDrop(event: CdkDragDrop<{ id: number; title: string; tasks: string[] }[]>) {
    moveItemInArray(this.lists, event.previousIndex, event.currentIndex);
  }



  changebackground(color:any){
 this.backgroundcolor=color;
  }


}
