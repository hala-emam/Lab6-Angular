import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationaid',
  standalone: true,
})
export class NationaidPipe implements PipeTransform {
  transform(id: string, FullDate: string): string {
    if (!id || id.length !== 14 || !FullDate) {
      return '';
    }
    const year = id.substring(1, 3);
    const month = id.substring(3, 5);
    const day = id.substring(5, 7);
    const fullYear = '20' + year;

    switch (FullDate) {
      case 'YY':
        return year;
      case 'MM':
        return month;
      case 'DD':
        return day;
      case 'FullDate':
        return `${day}-${month}-${fullYear}`;
      default:
        return `${day}-${month}-${fullYear}`;
    }
  }
}
