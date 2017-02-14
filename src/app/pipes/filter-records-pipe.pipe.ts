import { Pipe, PipeTransform } from '@angular/core';
import { RecordCardComponent } from '../components/record-card/record-card.component';

@Pipe({
  name: 'filterRecordsPipe'
})
export class FilterRecordsPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    // pipe details go here.


  }

}
