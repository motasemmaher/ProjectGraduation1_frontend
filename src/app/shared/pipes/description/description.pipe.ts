import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: string, length?: number): any {
    // // tslint:disable-next-line: prefer-for-of
    // for (let i = 0 ; i < value.length ; i++){
    //   // tslint:disable-next-line: triple-equals
    //   if (i % 30 == 0){

    //   }
    // }
    if (value.length > length){
      return value.substr(0,length);
    }
    return value;
  }

}
