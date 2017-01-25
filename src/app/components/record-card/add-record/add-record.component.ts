import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent {

// List of all eligible activities 
  private activityList = [
    { id: 1, name: 'A - Attendance (Per Quarter)' },
    { id: 2, name: 'F - Fitness' },
    { id: 3, name: 'BD - Blood Donation' },
    { id: 4, name: 'ER - Environmental Responsibility' },
    { id: 5, name: 'PD - Personal Development' },
    { id: 6, name: 'V - Volunteer Activities' },
    { id: 7, name: 'QS1 - Quit Smoking (1 Month)' },
    { id: 8, name: 'QS2 - Quit Smoking (2 Months)' },
    { id: 9, name: 'QS6 - Quit Smoking (6 Months)' },
    { id: 10, name: 'QS12 - Quit Smoking (12 Months)' },
    { id: 11, name: 'WL - Weight Loss (Initial - 10 Pounds)' },
    { id: 12, name: 'WL6 - Weight Loss (Maintained 6 Months)' },
    { id: 13, name: 'WL12 - Weight Loss (Maintained 12 Months)' }
  ];
  // List of all fitness activities within the eligible activities (when a user selects 'fitness')
  private fitnessList = [ 
    { id: 1, name: 'Aerobics', pointsPerUnit: 1, timePerUnit: 15, UnitofMeasurement: 'mins' },
    { id: 2, name: 'Badminton', pointsPerUnit: 1, timePerUnit: 20, UnitofMeasurement: 'mins' },
    { id: 3, name: 'Baseball/Softball', pointsPerUnit: 2, timePerUnit: 1, UnitofMeasurement: 'game(s)' },
    { id: 4, name: 'Basketball', pointsPerUnit: 1, timePerUnit: 12, UnitofMeasurement: 'mins' },
    { id: 5, name: 'Bicycling/Exercise Bike', pointsPerUnit: 1, timePerUnit: 15, UnitofMeasurement: 'mins' },
    { id: 6, name: 'Cross Country Skiing', pointsPerUnit: 1, timePerUnit: 12, UnitofMeasurement: 'mins' },
    { id: 7, name: 'Dancing', pointsPerUnit: 1, timePerUnit: 20, UnitofMeasurement: 'mins' },
    { id: 8, name: 'Downhill Skiing', pointsPerUnit: 1, timePerUnit: 15, UnitofMeasurement: 'mins' },
    { id: 9, name: 'Dragon Boat', pointsPerUnit: 1, timePerUnit: 12, UnitofMeasurement: 'mins' },
    { id: 10, name: 'Frisbee (or Ultimate)', pointsPerUnit: 1, timePerUnit: 30, UnitofMeasurement: 'mins' },
    { id: 11, name: 'Golf (carrying clubs)', pointsPerUnit: 2, timePerUnit: 9, UnitofMeasurement: 'holes' },
    { id: 12, name: 'Golf (cart)', pointsPerUnit: 1, timePerUnit: 9, UnitofMeasurement: 'holes' },
    { id: 13, name: 'Grouse Grind', pointsPerUnit: 1, timePerUnit: 10, UnitofMeasurement: 'mins' },
    { id: 14, name: 'Handball/Squash/Recquetball', pointsPerUnit: 1, timePerUnit: 10, UnitofMeasurement: 'mins' },
    { id: 15, name: 'Hiking', pointsPerUnit: 1, timePerUnit: 25, UnitofMeasurement: 'mins' },
    { id: 16, name: 'Horseback Riding', pointsPerUnit: 1, timePerUnit: 20, UnitofMeasurement: 'mins' },
    { id: 17, name: 'Ice Hockey', pointsPerUnit: 1, timePerUnit: 12, UnitofMeasurement: 'mins' },
    { id: 18, name: 'Inline/Roller Blading', pointsPerUnit: 1, timePerUnit: 15, UnitofMeasurement: 'mins' },
    { id: 19, name: 'Jogging', pointsPerUnit: 1, timePerUnit: 15, UnitofMeasurement: 'mins' },
    { id: 20, name: 'Judo, Karate, Kick Boxing', pointsPerUnit: 1, timePerUnit: 10, UnitofMeasurement: 'mins' },
    { id: 21, name: 'Kayaking/Canoeing', pointsPerUnit: 1, timePerUnit: 20, UnitofMeasurement: 'mins' },
    { id: 22, name: 'Rowing', pointsPerUnit: 1, timePerUnit: 15, UnitofMeasurement: 'mins' },
    { id: 23, name: 'Running (10 minute mile)', pointsPerUnit: 1, timePerUnit: 10, UnitofMeasurement: 'mins' },
    { id: 24, name: 'Soccer', pointsPerUnit: 1, timePerUnit: 15, UnitofMeasurement: 'mins' },
    { id: 25, name: 'Stair-Climbing', pointsPerUnit: 1, timePerUnit: 20, UnitofMeasurement: 'mins' },
    { id: 26, name: 'Swimming', pointsPerUnit: 1, timePerUnit: 12, UnitofMeasurement: 'mins' },
    { id: 27, name: 'Tennis', pointsPerUnit: 1, timePerUnit: 15, UnitofMeasurement: 'mins' },
    { id: 28, name: 'Volleyball (beach)', pointsPerUnit: 1, timePerUnit: 12, UnitofMeasurement: 'mins' },
    { id: 29, name: 'Volleyball (court)', pointsPerUnit: 1, timePerUnit: 30, UnitofMeasurement: 'mins' },
    { id: 30, name: 'Walking (moderate pace)', pointsPerUnit: 1, timePerUnit: 30, UnitofMeasurement: 'mins' },
    { id: 31, name: 'Weight Training', pointsPerUnit: 1, timePerUnit: 15, UnitofMeasurement: 'mins' },
    { id: 32, name: 'Yoga', pointsPerUnit: 1, timePerUnit: 12, UnitofMeasurement: 'mins' }
  ];

  // List of personal development Activities
  private personalDevList = [
    { id: 1, name: 'First Aid, CPR or other non-credit courses approved by Central 1', points: 10 },
    { id: 2, name: 'Post-secondary courses', points: 25 }
  ];

  private volunteeringList = [
    { id: 1, name: 'External - volunteering in the community (points per hour)', points: 5},
    { id: 2, name: 'Internal - join committee', points: 15 },
    { id: 3, name: 'Internal - committee meeting', points: 3 },
    { id: 4, name: 'Internal - points per hour spend on committee business (outisde of work hours)', points: 5 }
  ];

  // Setting private variables that we will need for calculations and data binding.
  private maxPoints = [ 7, 8, 9, 10, 11, 12, 13]; // Values that award 200 points
  private i: number;
  private pointsValue: number;
  private originalPointsValue: number;
  private durationNumber: number;
  private originalDurationNumber: number;
  private durationString: string;
  private durationStringtoNumber: number;
  private UnitofMeasurement: string;

  // Assigning points values if there is no calculations to be done.
  private activityDropdown(id: number): void {
    // Attendance
    if (id == 1) {
      this.pointsValue = 25;
    }

    // Blood Donation
    if (id == 3) {
      this.pointsValue = 10;
    }

    // Environmental Responsibility
    if (id == 4) {
      this.pointsValue = 15;
    }

    // These are the activities in the 'maxPoints' array that award the maximum points: 200.
    for (this.i = 0; this.i <= this.maxPoints.length; this.i++) {
      if (id == this.maxPoints[this.i]) {
        this.pointsValue = 200;
      }
    }
  }

  // Applies values to the points earned and duration based on the fitness activity choice.
  private fitnessDropdown(id: number): void {
    // Finding the time per unit, points per unit and unit of measurement based on the fitness activity chosen.
    this.originalDurationNumber = this.fitnessList.find( (item: any) => item.id == id ).timePerUnit;
    this.originalPointsValue = this.fitnessList.find( (item: any) => item.id == id ).pointsPerUnit;
    this.UnitofMeasurement = this.fitnessList.find( (item: any) => item.id == id ).UnitofMeasurement;
    // Assigning the values.
    this.pointsValue = this.originalPointsValue;
    this.durationString = (this.originalDurationNumber + ' ' + this.UnitofMeasurement);
  }

  private personalDevDropDown(id: number): void {
    this.pointsValue = this.personalDevList.find( (item: any) => item.id == id ).points;
  }

  private volunteerDropDown(id: number): void {
    this.pointsValue = this.volunteeringList.find( (item: any) => item.id == id ).points;
  }

  // Allows the user to increase duration, if there is a duration...
  // Will increase the points earned also.
  private increaseDuration(durationString: string): void {
    this.durationString = this.durationString.substring(0,2);
    this.durationStringtoNumber = Number(this.durationString);
    this.durationNumber = this.durationStringtoNumber + this.originalDurationNumber;
    this.durationString = (this.durationNumber + ' ' + this.UnitofMeasurement);
    this.pointsValue = this.pointsValue + this.originalPointsValue;
  }

  private decreaseDuration(durationString: string):void {
    this.durationString = this.durationString.substring(0,2);
    this.durationStringtoNumber = Number(this.durationString);
    this.durationNumber = this.durationStringtoNumber - this.originalDurationNumber;
    this.durationString = (this.durationNumber + ' ' + this.UnitofMeasurement);
    this.pointsValue = this.pointsValue - this.originalPointsValue;
  }

}
