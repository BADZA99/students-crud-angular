import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
