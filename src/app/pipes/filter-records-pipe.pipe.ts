import { Pipe, PipeTransform } from '@angular/core';
import { RecordCardComponent } from '../components/record-card/record-card.component';

@Pipe({
  name: 'filterRecordsPipe'
})
export class FilterRecordsPipePipe implements PipeTransform {

  transform(records : RecordCardComponent[], inputText : string) {

    if (records === null) {
      return null;
    }
    return records.filter( record => new RegExp(inputText, 'i').test( (<any>Object).values( record ).join() ) )
}


