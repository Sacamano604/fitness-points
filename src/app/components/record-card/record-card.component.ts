import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.css']
})
export class RecordCardComponent implements OnInit {
  private activityList = [
    { id: 1, name: 'A - Attendance' },
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

  private activitySelect: number = 0;
  // private log: string ='';

  private logDropdown(id: number): void {
    const selectedName = this.activityList.find( (item: any) => item.id == id ).name;
    // this.log += `Value ${NAME} was selected\n`;
    console.log({ selectedName });

  }

  constructor() { }

  ngOnInit() {
  }

}