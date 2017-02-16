import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './components/app-component/app.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { RecordCardComponent } from './components/record-card/record-card.component';
import { AddRecordComponent } from './components/record-card/add-record/add-record.component';
import { FilterRecordsPipePipe } from './pipes/filter-records-pipe.pipe';
import { DeleteRecordComponent } from './components/record-card/delete-record/delete-record.component';

// Exporting the firebase confg.
export const firebaseConfig = {
  apiKey: 'AIzaSyB_qd-6xDlKlDzS2UiaqPQAOgV8cI-DT6A',
  authDomain: 'fitness-points.firebaseapp.com',
  databaseURL: 'https://fitness-points.firebaseio.com',
  storageBucket: 'fitness-points.appspot.com'
}

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    InstructionsComponent,
    ActivitiesComponent,
    RecordCardComponent,
    AddRecordComponent,
    FilterRecordsPipePipe,
    DeleteRecordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
