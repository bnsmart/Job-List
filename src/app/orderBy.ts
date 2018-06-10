import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: 'OrderByUpcomingToLatestPipe'
})
export class OrderByUpcomingToLatestPipe implements PipeTransform {

    transform(value: any, args?: any): any {

        if (args === undefined) {return value}


        let newVal = value.sort(function(name1, name2) {

            if (args == 1) {

                if ( name1.date < name2.date ){
                    return -1;
                }else if( name1.date > name2.date ){
                    return 1;
                }else{
                    return 0;	
                }
            }
            else
            {
                if ( name1.date < name2.date ){
                    return 1;
                }else if( name1.date > name2.date ){
                    return -1;
                }else{
                    return 0;	
                }
            }

        });


        
        return newVal;
    }
    
}