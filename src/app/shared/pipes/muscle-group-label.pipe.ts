import { Pipe, PipeTransform } from '@angular/core';

import { MuscleGroup } from '@core/models/exercise.model';

const MUSCLE_GROUP_LABELS: Record<MuscleGroup, string> = {
  [MuscleGroup.Chest]: 'Pecho',
  [MuscleGroup.Back]: 'Espalda',
  [MuscleGroup.Legs]: 'Piernas',
  [MuscleGroup.Shoulders]: 'Hombros',
  [MuscleGroup.Biceps]: 'Bíceps',
  [MuscleGroup.Triceps]: 'Tríceps',
  [MuscleGroup.Core]: 'Core',
};

/** Translates the `MuscleGroup` enum to its Spanish label for display. */
@Pipe({ name: 'muscleGroupLabel', standalone: true })
export class MuscleGroupLabelPipe implements PipeTransform {
  transform(value: MuscleGroup): string {
    return MUSCLE_GROUP_LABELS[value] ?? value;
  }
}
