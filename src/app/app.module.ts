import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ElementItemComponent } from './element-item/element-item.component';
import { ElementDataService } from './element-data.service';


@NgModule({
  declarations: [
    AppComponent,
    ElementItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ElementDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
