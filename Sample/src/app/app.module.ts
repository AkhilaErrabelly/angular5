import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { NumberOnlyDirective } from './editor/numberonly.directive';
import { CameraComponent } from './camera/camera.component';
import { NumberminmaxDirective } from './directives/numberminmax.directive';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    NumberOnlyDirective,
    CameraComponent,
    NumberminmaxDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
