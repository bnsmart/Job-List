import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    if (args === undefined) return value;

    return value.filter(function(user){
      return user.name.includes(args);
      })

  }

}
