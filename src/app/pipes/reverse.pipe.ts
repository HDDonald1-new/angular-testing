import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(v: string): string {
    return v.split('').reverse().join('')
  }
}
