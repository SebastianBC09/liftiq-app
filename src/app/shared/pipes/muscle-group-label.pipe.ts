// TODO: Out of scope for the current UI-bindings-only milestone
// (property binding, event binding, two-way binding). Pipes are their
// own Angular mechanism — we'll wire the transform() logic once we get there.
//
// Will translate the MuscleGroup enum to its Spanish label (Piernas, Pecho, etc.).

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'MuscleGroupLabelPipePlaceholder', standalone: true })
export class MuscleGroupLabelPipe implements PipeTransform {
  transform(value: unknown): unknown {
    return value;
  }
}
