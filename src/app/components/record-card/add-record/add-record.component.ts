import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent {
  activityList: FirebaseListObservable<any>;
  fitnessList: FirebaseListObservable<any>;
  personalDevList: FirebaseListObservable<any>;
  volunteeringList: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.activityList = af.database.list('/masterList/activityList');
    this.fitnessList = af.database.list('/masterList/fitnessList');
    this.personalDevList = af.database.list('/masterList/personalDevList');
    this.volunteeringList = af.database.list('/masterList/volunteeringList');
  }

  // Setting private variables that we will need for calculations and data binding.
  private maxPoints = [ 6, 7, 8, 9, 10, 11, 12]; // IDs that award 200 points
  private i: number;
  private pointsValue: number;
  private originalPointsValue: number;
  private durationNumber: number;
  private originalDurationNumber: number;
  private unitofMeasurement: string;

  // Assigning points values if there is no calculations to be done.
  private activityDropdown(id: number): void {
    // Attendance
    if (id == 0) {
      this.pointsValue = 25;
    }

    // Blood Donation
    if (id == 2) {
      this.pointsValue = 10;
    }

    // Environmental Responsibility
    if (id == 3) {
      this.pointsValue = 15;
    }

    // These are the activities in the 'maxPoints' array that award the maximum points: 200.
    for (this.i = 0; this.i <= this.maxPoints.length; this.i++) {
      if (id == this.maxPoints[this.i]) {
        this.pointsValue = 200;
      }
    }
  }
  
  // Finding and assigning the points value for fitness activity
  private fitnessDropdown(id: number): void {
    this.fitnessList.subscribe( item => { 
     // Assigning the original values to use later in the increase/decrease functions
     this.originalDurationNumber = item[id].timePerUnit;
     this.originalPointsValue = item[id].pointsPerUnit;
     // Assigning the values to use in the template
     this.pointsValue = this.originalPointsValue;
     this.durationNumber = this.originalDurationNumber;
     this.unitofMeasurement = item[id].UnitofMeasurement;
    });
  }

  // Finding and assigning the points value for personal development activity
  private personalDevDropDown(id: number): void {
    this.personalDevList.subscribe( item => {
      this.pointsValue = item[id].points;
    });
  }

  // Finding and assigning the points value for volunteer activities 
  private volunteerDropDown(id: number): void {
    this.volunteeringList.subscribe( item => {
      this.pointsValue = item[id].points;
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

}
