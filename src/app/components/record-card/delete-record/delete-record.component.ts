import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'delete-record',
  templateUrl: './delete-record.component.html',
  styleUrls: ['./delete-record.component.css']
})

export class DeleteRecordComponent {
  @Input() passedKey: string;
  @Input() passedRecordDate: string;
  @Input() passedRecordActivity: string;

  records: FirebaseListObservable<any>;
  date: string;
  activity: string;

  constructor(af: AngularFire) {
    this.records = af.database.list('/activityRecord');
   }
  
  passRecordInfo(date: string, activity: string) {
    this.date = date;
    this.activity = activity;
  }
  deleteRecord(key: string) {
    this.records.remove(key);
  }
}
