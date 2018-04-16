import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    return value
      .toLowerCase()
      .split("-")
      .map(p => p.charAt(0).toUpperCase() + p.substring(1))
      .join("-")
      .split(" ")
      .map(p => p.charAt(0).toUpperCase() + p.substring(1))
      .join(" ");
  }

}
