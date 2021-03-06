import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FormControl, Validators, NgForm } from '@angular/forms';

import { Record } from './record';

@Component({
  selector: 'add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css'],
})

export class AddRecordComponent {

  model = new Record('', '', '', '', '', '', 0, '');

  activityList: FirebaseListObservable<any>;
  fitnessList: FirebaseListObservable<any>;
  personalDevList: FirebaseListObservable<any>;
  volunteeringList: FirebaseListObservable<any>;
  activityRecord: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    // Drop down information
    this.activityList = af.database.list('/masterList/activityList');
    this.fitnessList = af.database.list('/masterList/fitnessList');
    this.personalDevList = af.database.list('/masterList/personalDevList');
    this.volunteeringList = af.database.list('/masterList/volunteeringList');
    // Where we're pushing the data
    this.activityRecord = af.database.list('/activityRecord');
  }

  // Setting private variables that we will need for calculations and data binding.
  private category: string;
  private pointsValue: number;
  private originalPointsValue: number;
  private durationNumber: number;
  private originalDurationNumber: number;
  private unitofMeasurement: string;

  // Assigning points values if there is no calculations to be done.
  private activityDropdown(activityDropdownValue) {
    const index = activityDropdownValue.split(' ')[0];
    this.category = activityDropdownValue.split(' ')[1];

    switch (this.category) {
      // Attendance
      case 'attendance':
        this.pointsValue = 25;
        break;
      // Blood Donation
      case 'blooddonation':
        this.pointsValue = 10;
        break;
      // Environmental Responsibility
      case 'environmentresp':
        this.pointsValue = 15;
        break;
      // Quit Smoking
      case 'quitsmoking':
        this.pointsValue = 200;
        break;
      // Weight Loss
      case 'weightloss':
        this.pointsValue = 200;
        break;

      default:
    }
  }

  // Finding and assigning the points value for fitness activity
  private fitnessDropdown(fitnessDropdownValue) {
    const index = fitnessDropdownValue.split(' ')[0];
    this.fitnessList.subscribe(item => {
      // Assigning the original values to use later in the increase/decrease functions
      this.originalDurationNumber = item[index].timePerUnit;
      this.originalPointsValue = item[index].pointsPerUnit;
      // Assigning the values to use in the template
      this.pointsValue = this.originalPointsValue;
      this.durationNumber = this.originalDurationNumber;
      this.unitofMeasurement = item[index].UnitofMeasurement;
    });
  }

  // Finding and assigning the points value for personal development activity
  private personalDevDropDown(personalDropdownValue) {
    const index = personalDropdownValue.split(' ')[0];
    this.personalDevList.subscribe(item => {
      this.pointsValue = item[index].points;
    });
  }

  // Finding and assigning the points value for volunteer activities 
  private volunteerDropDown(volunteerDropDownValue) {
    const index = volunteerDropDownValue.split(' ')[0];
    this.volunteeringList.subscribe(item => {
      this.pointsValue = item[index].points;
    });
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

  addRecord(activityDate: string, activity: string, fitnessActivity: string, personalActivity: string, volunteerActivity: string, durationNumber: string, unitofMeasurement: string, pointsEarned: number, notes: string): void {
    var duration = '';
    const activityname = activity.split(' ').slice(2).join(' ');
    const fitnessName = fitnessActivity.split(' ').slice(1).join(' ');
    const personalName = personalActivity.split(' ').slice(1).join(' ');
    const volunteerName = volunteerActivity.split(' ').slice(1).join(' ');
    const durationString = durationNumber + ' ' + unitofMeasurement;

    if (durationString === 'undefined undefined') {
      var duration = '';
    } else {
      var duration = durationString;
    }

    console.log('SUBMITTED');
    console.log('==========');
    console.log('Date: ' + activityDate);
    console.log('Activity: ' + activityname);
    console.log('Fitness Activity: ' + fitnessName);
    console.log('Personal Activity: ' + personalName);
    console.log('Volunteer Activity: ' + volunteerName);
    console.log('Duration: ' + duration);
    console.log('Points Earned: ' + pointsEarned);
    console.log('Notes: ' + notes);

    this.activityRecord.push({ activityDate: activityDate, activity: activityname, fitnessActivity: fitnessName, personalActivity: personalName, volunteerActivity: volunteerName, duration: duration, pointsEarned: pointsEarned, notes: notes });
  }
}


