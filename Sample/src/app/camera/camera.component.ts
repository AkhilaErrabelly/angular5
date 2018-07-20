import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  @Input() camera: any;

  isEditMode : boolean;
  constructor() {
    this.isEditMode = false;
  }

  ngOnInit() {
  }

  switchToReadonlyMode(){
    this.isEditMode = false;
  }

  onMenuChange(selectedOption){
    if(selectedOption == 'rename'){
      this.isEditMode = true;
    }
  }

  onRename(){
    this.isEditMode = true;
  }
  delete(){

  }

  onKeyUp(value){
    this.camera.name = value;
  }
}
