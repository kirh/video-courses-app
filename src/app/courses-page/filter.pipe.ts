import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field: string, filter = ''): any[] {
    return items.filter(item => item[field]?.toUpperCase().includes(filter.toUpperCase()));
  }

}
