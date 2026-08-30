import { Pipe, PipeTransform } from '@angular/core';

/** Formats a duration in seconds as `m:ss`, or `h:mm:ss` past one hour. */
@Pipe({ name: 'duration', standalone: true })
export class DurationPipe implements PipeTransform {
  transform(totalSeconds: number | null | undefined): string {
    if (totalSeconds === null || totalSeconds === undefined || Number.isNaN(totalSeconds)) {
      return '—';
    }

    const clamped = Math.max(0, Math.floor(totalSeconds));
    const hours = Math.floor(clamped / 3600);
    const minutes = Math.floor((clamped % 3600) / 60);
    const seconds = clamped % 60;
    const paddedSeconds = String(seconds).padStart(2, '0');

    if (hours > 0) {
      const paddedMinutes = String(minutes).padStart(2, '0');
      return `${hours}:${paddedMinutes}:${paddedSeconds}`;
    }
    return `${minutes}:${paddedSeconds}`;
  }
}
