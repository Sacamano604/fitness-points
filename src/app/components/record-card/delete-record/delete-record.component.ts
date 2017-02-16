import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'delete-record',
  templateUrl: './delete-record.component.html',
  styleUrls: ['./delete-record.component.css']
})

export class DeleteRecordComponent {
  records: FirebaseListObservable<any>;
  @Input() passedKey: string;

  constructor(af: AngularFire) {
    this.records = af.database.list('/activityRecord');
   }
  
  deleteRecord(key: string) {
    this.records.remove(key);
  }
}
