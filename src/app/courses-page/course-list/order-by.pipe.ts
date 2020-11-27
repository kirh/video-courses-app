import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(items: any[], field: string, reverse= false): any[] {
    items.sort((a, b) => a[field] - b[field]);
    if (reverse) {
      items.reverse();
    }
    return items;
  }

}
