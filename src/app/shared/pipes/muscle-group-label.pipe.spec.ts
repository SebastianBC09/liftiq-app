import { MuscleGroup } from '@core/models/exercise.model';

import { MuscleGroupLabelPipe } from './muscle-group-label.pipe';

describe('MuscleGroupLabelPipe', () => {
  const pipe = new MuscleGroupLabelPipe();

  it.each([
    [MuscleGroup.Chest, 'Pecho'],
    [MuscleGroup.Back, 'Espalda'],
    [MuscleGroup.Legs, 'Piernas'],
    [MuscleGroup.Shoulders, 'Hombros'],
    [MuscleGroup.Biceps, 'Bíceps'],
    [MuscleGroup.Triceps, 'Tríceps'],
    [MuscleGroup.Core, 'Core'],
  ])('translates %s to %s', (group, label) => {
    expect(pipe.transform(group)).toBe(label);
  });

  it('falls back to the raw value for an unrecognized group', () => {
    expect(pipe.transform('unknown' as MuscleGroup)).toBe('unknown');
  });
});
