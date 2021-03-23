import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommunicationService } from './communication.service';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
 

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ParentComponent, ChildComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CommunicationService]
})
export class AppModule { }
