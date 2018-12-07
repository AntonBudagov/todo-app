import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDate'
})
export class FilterDatePipe implements PipeTransform {

  transform(items: any[], searchDate?: any): any {
    if(!items) return [];
      searchDate = searchDate.toString();
      return items.filter( it => {
          return it.toLowerCase().includes(searchDate);
      });
  }
}
