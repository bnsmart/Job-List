import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'faultFilter',
  pure: false,
})
export class FaultFilterPipe implements PipeTransform {



  transform(value: any, args?: any): any {
  
    if (args === undefined) return value;

    if (value === undefined) {};

    return value.filter(function(fault){
          return fault.resolved == args;  
      })
  }

}
