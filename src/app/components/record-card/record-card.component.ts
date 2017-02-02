import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.css']
})

export class RecordCardComponent {
  records: FirebaseListObservable<any>;
  activityList: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.records = af.database.list('/activityRecord');
    this.activityList = af.database.list('/masterList/activityList');
  }

  







}