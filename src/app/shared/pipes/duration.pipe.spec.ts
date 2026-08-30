import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  const pipe = new DurationPipe();

  it('formats zero seconds', () => {
    expect(pipe.transform(0)).toBe('0:00');
  });

  it('formats a session time under an hour, matching the analysis mockup (1:42)', () => {
    expect(pipe.transform(102)).toBe('1:42');
  });

  it('pads single-digit seconds', () => {
    expect(pipe.transform(65)).toBe('1:05');
  });

  it('formats durations past one hour as h:mm:ss', () => {
    expect(pipe.transform(3661)).toBe('1:01:01');
  });

  it('clamps negative input to zero', () => {
    expect(pipe.transform(-5)).toBe('0:00');
  });

  it('returns — for null input', () => {
    expect(pipe.transform(null)).toBe('—');
  });
});
