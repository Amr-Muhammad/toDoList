import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase',
  standalone: true
})
export class UppercasePipe implements PipeTransform {

  transform(text: string): string {
    return text.split(' ').map(value => (value.charAt(0).toUpperCase()).concat(value.slice(1))).join(' ');
  }

}
