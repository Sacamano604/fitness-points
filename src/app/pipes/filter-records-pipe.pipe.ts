import { Pipe, PipeTransform } from '@angular/core';
import { RecordCardComponent } from '../components/record-card/record-card.component';

@Pipe({
  name: 'filterRecordsPipe'
})
export class FilterRecordsPipePipe implements PipeTransform {

  transform(records : RecordCardComponent[], text : string) {
    console.log(text);
    // text = text.toLowerCase(); 
    if (records === null) {
      return null;
    }
     return records.filter( record =>new RegExp(text).test(record.activity) );

    // return records.filter(record => record.title.toLowerCase().includes(text));

    }
}


