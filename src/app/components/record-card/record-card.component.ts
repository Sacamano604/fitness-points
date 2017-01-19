import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.css']
})
export class RecordCardComponent implements OnInit {
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

  private fitnessList = [
    { id: 1, name: 'Aerobics', pointsPerTime: 1, timePerPoints: 15 },
    { id: 2, name: 'Badminton', pointsPerTime: 1, timePerPoints: 20 },
    // Missing baseball softball here...
    { id: 3, name: 'Basketball', pointsPerTime: 1, timePerPoints: 12 }
  ];

  private maxPoints = [ 7, 8, 9, 10, 11, 12, 13]; // Values that award 200 points
  private i: number = 0;
  private pointsValue: number = 0;
  private durationNUmber: number = 0;
  private durationString: string = '';

  private activityDropdown(id: number): void {
    // Attendance
    if (id == 1) {
      this.pointsValue = 25;
    }
    // Fitness

    // Blood Donation
    if (id == 3) {
      this.pointsValue = 10;
    }

    for (this.i = 0; this.i <= this.maxPoints.length; this.i++){
      if (id == this.maxPoints[this.i]) {
        this.pointsValue = 200;
      }
    }
  }

  private fitnessDropdown(id: number): void {
    this.durationNUmber = this.fitnessList.find( (item: any) => item.id == id ).timePerPoints;
    this.pointsValue = this.fitnessList.find( (item: any) => item.id == id ).pointsPerTime;
    this.durationString = (this.durationNUmber + ' mins');
  }

  constructor() { }

  ngOnInit() {
  }

}