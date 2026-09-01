// TODO: Out of scope for the current UI-bindings-only milestone
// (property binding, event binding, two-way binding). Pipes are their
// own Angular mechanism — we'll wire the transform() logic once we get there.
//
// Will format a joint angle as e.g. '87.3°', and '—' for null.

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'AngleFormatPipePlaceholder', standalone: true })
export class AngleFormatPipe implements PipeTransform {
  transform(value: unknown): unknown {
    return value;
  }
}
