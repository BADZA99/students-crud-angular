import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// !Importer FormsModule pour le support des formulaires et faire le two-way data binding
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { IndexStudent } from './Students/index-student/index-student';
import { CreateStudent } from './Students/create-student/create-student';
import { EditStudent } from './Students/edit-student/edit-student';

@NgModule({
  declarations: [
    App,
    IndexStudent,
    CreateStudent,
    EditStudent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
