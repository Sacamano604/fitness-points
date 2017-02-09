import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { RecordCardService } from '../../../services/record-card.service'


@Component({
  selector: 'add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css'],
  providers: [ RecordCardService ]
})

export class AddRecordComponent {
  
  activities: Observable<any>;
  fitnessActivities: Observable<any>;
  personalDevActivities: Observable<any>;
  volunteerActivities: Observable<any>;

  private activityType: string;
  private pointsValue: number;
  private originalDurationNumber: number;
  private originalPointsValue: number;
  private durationNumber: number;
  private unitofMeasurement: string;

  constructor(private _recordCardService: RecordCardService) {
    // Using the service to get activities for dropdown
    this._recordCardService.getActivities()
      .subscribe( 
        activities => this.activities = activities
      );
    // Using the service to get fitness activities for the dropdown
    this._recordCardService.getFitnessActivities()
      .subscribe(
        fitnessActivities => this.fitnessActivities = fitnessActivities
      );
    // Using the service to get the personal development activities for the dropdown
    this._recordCardService.getPersonalDevActivities()
      .subscribe(
        personalDevActivities => this.personalDevActivities = personalDevActivities
      );
    // Using the service to get the volunteering activities for the dropdown
    this._recordCardService.getVolunteerActivities()
      .subscribe(
        volunteerActivities => this.volunteerActivities = volunteerActivities
      );
    }
  
  // Triggers for when the activity is selected
  private activityDropdown(activityDropDownValue) {
    const string = activityDropDownValue;
    const index = string.split(' ')[0];
    // const id = string.split(' ')[1];
    this.activityType = string.split(' ')[2];

    this._recordCardService.getActivities().subscribe( item => {
      this.pointsValue = item[index].pointsValue;
    });
  }
  // Triggers for when the fitness activity is selected
  private fitnessDropdown(fitnessDropdownValue) {
    const string = fitnessDropdownValue;
    const index = string.split(' ')[0];
    // const id = string.split(' ')[1];

    this._recordCardService.getFitnessActivities().subscribe( item => {
      this.originalDurationNumber = parseInt(item[index].timePerUnit);
      this.originalPointsValue = parseInt(item[index].pointsPerUnit);
      this.pointsValue = this.originalPointsValue;
      this.durationNumber = this.originalDurationNumber;
      this.unitofMeasurement = item[index].unitofMeasurement;
    });
  }
  // Triggers when the personal development activitiy is selected
  private personalDevDropDown(personalDropDownValue) {
    const string = personalDropDownValue;
    const index = string.split(' ')[0];
    // const id = string.split(' ')[1];

    this._recordCardService.getPersonalDevActivities().subscribe( item => {
      this.pointsValue = item[index].points;
    });
  }
  // Triggers when the volunteer activity is selected
  private volunteerDropDown(volunteerDropDownValue) {
    const string = volunteerDropDownValue;
    const index = string.split(' ')[0];
    const id = string.split(' ')[1];

    this._recordCardService.getVolunteerActivities().subscribe( item => {
      this.pointsValue = item[index].points;
    })

  }

    // Allows the user to increase duration, and points awarded per duration period
    private increaseDuration() {
      this.durationNumber += this.originalDurationNumber;
      this.pointsValue += this.originalPointsValue;
    }
    // Allows the user to decrease the duration, and points awarded per duration period
    private decreaseDuration() {
      this.durationNumber -= this.originalDurationNumber;
      this.pointsValue -= this.originalPointsValue;
    }








  addRecord(activityDate: string, activity: string, fitnessActivity: string, personalActivity: string, volunteerActivity: string, duration: string, pointsEarned: number, notes: string): void {


    console.log('Date: ' + activityDate);
    console.log('Activity: ' + activity.split(' ')[1]);
    console.log('Fitness: ' + fitnessActivity.split(' ')[1]);
    console.log('Personal: ' + personalActivity.split(' ')[1]);
    console.log('Volunteer: ' + volunteerActivity.split(' ')[1]);
    console.log('Duration: ' + duration);
    console.log('pointsEarned: ' + pointsEarned);
    console.log('Notes: ' + notes);

    
    // this.activityRecord.push({ activityDate: activityDate, activity: activityName, fitnessActivity: fitnessActivity, personalActivity: personalActivity, volunteerActivity: volunteerActivity, duration: duration, pointsEarned: pointsEarned, notes: notes });
  }



  resetForm() {
    // Don't ask...works for now
    document.getElementById("recordCardForm").reset();
  }





}
