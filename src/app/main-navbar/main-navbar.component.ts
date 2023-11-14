import { Component,EventEmitter,Output } from '@angular/core';
import { WorkspaceService } from '../services/workspace.service';
import { Workspace } from '../interfaces/workspace';
import { PopupCreateWorkspaceComponent } from '../popup-create-workspace/popup-create-workspace.component';
import {MatDialog,} from '@angular/material/dialog';
import { data } from 'jquery';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css'],
})
export class MainNavbarComponent {



  workspaces:Array<Workspace> = [];

  constructor(private workspaceService:WorkspaceService,private dialog:MatDialog,private router:Router){
  }

  ngOnInit(){
    setTimeout(()=>{
      this.workspaceService.getAllWorkspaces().subscribe(
        (res:any)=>{
          this.workspaces = res.data
        },
        (error) => {console.log()}
      );
    },3000)
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(PopupCreateWorkspaceComponent, {
      data:{title:'',description:'',workspaces:this.workspaces},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
     this.workspaces = result.workspaces;
    });
  }

  selectWorkspace(workspace:Workspace){
    this.workspaceService.SelectedWorkspace(workspace);
    this.router.navigate(['workspace', workspace.id]);
  }




}
