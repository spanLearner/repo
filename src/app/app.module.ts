import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import {NgxFsModule} from 'ngx-fs';
import { AppRoutingModule } from './app.routing.module';
import { QuizComponent } from './quiz/quiz.component';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxFsModule,
    HttpClientModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
