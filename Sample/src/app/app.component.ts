import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  cameras: any[];

  constructor(){
    this.cameras = [];

    for (var index = 0; index < 10; index++) {
      var item = { id: Math.random(), name: "Camera_" + index};
      this.cameras.push(item);
    }
  }

  onNameUpdated(value){
    var cameraToUpdate = this.cameras.find(x=> x.id == value.key);

    console.log("AppComponent's cameraToUpdate: ", cameraToUpdate);
    cameraToUpdate.name = value.updatedName;
  }
}
