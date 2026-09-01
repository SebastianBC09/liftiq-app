// TODO: Out of scope for the current UI-bindings-only milestone
// (property binding, event binding, two-way binding). Pipes are their
// own Angular mechanism — we'll wire the transform() logic once we get there.
//
// Will format a session duration in seconds as mm:ss.

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'DurationPipePlaceholder', standalone: true })
export class DurationPipe implements PipeTransform {
  transform(value: unknown): unknown {
    return value;
  }
}
