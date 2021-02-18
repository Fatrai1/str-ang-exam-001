import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], phrase: string, fkey:string): any[] {
    if  (!Array.isArray(value) || !phrase || !fkey){
      return value;
    }
  }

}
