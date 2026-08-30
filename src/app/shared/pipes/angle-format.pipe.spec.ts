import { AngleFormatPipe } from './angle-format.pipe';

describe('AngleFormatPipe', () => {
  it('formats angle with one decimal and degree symbol', () => {
    const pipe = new AngleFormatPipe();
    expect(pipe.transform(87.345)).toBe('87.3°');
  });

  it('returns — for null input', () => {
    const pipe = new AngleFormatPipe();
    expect(pipe.transform(null)).toBe('—');
  });

  it('returns — for undefined input', () => {
    const pipe = new AngleFormatPipe();
    expect(pipe.transform(undefined)).toBe('—');
  });

  it('rounds down correctly at the tenths boundary', () => {
    const pipe = new AngleFormatPipe();
    expect(pipe.transform(90)).toBe('90.0°');
  });
});
