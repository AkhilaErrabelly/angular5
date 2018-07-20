import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @Input()  cameras: any[];

  onKeyUp(value, camera){
    //camera.name = value;
    var changes = { "key": camera.id, updatedName: value };

    this.onNameChange.emit(changes);
  }

  @Output()
  onNameChange = new EventEmitter<any>();

  ngOnInit() {
  }

}
