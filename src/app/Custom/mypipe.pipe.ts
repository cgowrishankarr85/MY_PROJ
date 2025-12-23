import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let val =  value as string;
    let prefixVal = args[0] as string;
    let charVal =  args[1] as string; 
    let newval= val.toString().padStart(10,charVal);
    return prefixVal+ newval;
  }

}
