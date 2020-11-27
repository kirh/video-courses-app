import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    const hours = Math.trunc(value / 60);
    const minutes = Math.trunc(value % 60);
    return (hours > 0 ? hours + ' h ' : '') + minutes + ' min';
  }
}
