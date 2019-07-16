import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MessagebarComponent } from './messagebar/messagebar.component';
import { EmailSectionComponent } from './email-section/email-section.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    MessagebarComponent,
    EmailSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
