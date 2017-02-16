import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.css']
})

export class RecordCardComponent {
  expandedClass: false;
  @Input() activity: string;
  
  records: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.records = af.database.list('/activityRecord');
  }
}