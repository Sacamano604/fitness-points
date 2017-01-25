import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router'


import { AppComponent } from './components/app-component/app.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { RecordCardComponent } from './components/record-card/record-card.component';
import { AddRecordComponent } from './components/record-card/add-record/add-record.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    InstructionsComponent,
    ActivitiesComponent,
    RecordCardComponent,
    AddRecordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
