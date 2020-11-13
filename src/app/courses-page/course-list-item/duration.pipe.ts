import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    const hours = Math.trunc(value / 60000);
    const minutes = Math.trunc((value % 60000) / 1000);
    return `${hours}h ${minutes} min`;
  }
}
