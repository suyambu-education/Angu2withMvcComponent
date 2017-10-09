import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


import { HttpModule, Response} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [
    BrowserModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
