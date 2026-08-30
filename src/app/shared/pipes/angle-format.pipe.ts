import { Pipe, PipeTransform } from '@angular/core';

/** Formats a joint angle in degrees with one decimal place, e.g. `87.3°`. */
@Pipe({ name: 'angleFormat', standalone: true })
export class AngleFormatPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value === null || value === undefined || Number.isNaN(value)) {
      return '—';
    }
    return `${value.toFixed(1)}°`;
  }
}
