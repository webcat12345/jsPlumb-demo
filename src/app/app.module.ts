import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ElementItemComponent } from './element-item/element-item.component';
import { GoDiagramEditorComponent } from './go-diagram-editor/go-diagram-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    ElementItemComponent,
    GoDiagramEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
