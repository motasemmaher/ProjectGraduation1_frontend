import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: string, length?: number): any {
    if (value.length > length){
      return value.substr(0,length);
    }
    return value;
  }

}
