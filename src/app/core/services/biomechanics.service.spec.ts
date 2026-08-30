import { BlazePoseLandmark, Keypoint } from '@core/models/keypoint.model';

import { BiomechanicsService } from './biomechanics.service';

function point(name: BlazePoseLandmark, x: number, y: number, z = 0, score = 1): Keypoint {
  return { name, x, y, z, score };
}

describe('BiomechanicsService', () => {
  const service = new BiomechanicsService();

  describe('calculateAngle', () => {
    it('returns 90° for a right angle', () => {
      const hip = point(BlazePoseLandmark.LeftHip, 0, 1);
      const knee = point(BlazePoseLandmark.LeftKnee, 0, 0);
      const ankle = point(BlazePoseLandmark.LeftAnkle, 1, 0);

      expect(service.calculateAngle(hip, knee, ankle)).toBeCloseTo(90, 5);
    });

    it('returns 180° for a fully extended (straight) joint', () => {
      const hip = point(BlazePoseLandmark.LeftHip, -1, 0);
      const knee = point(BlazePoseLandmark.LeftKnee, 0, 0);
      const ankle = point(BlazePoseLandmark.LeftAnkle, 1, 0);

      expect(service.calculateAngle(hip, knee, ankle)).toBeCloseTo(180, 5);
    });

    it('returns 0° when both rays point in the same direction', () => {
      const hip = point(BlazePoseLandmark.LeftHip, 1, 0);
      const knee = point(BlazePoseLandmark.LeftKnee, 0, 0);
      const ankle = point(BlazePoseLandmark.LeftAnkle, 2, 0);

      expect(service.calculateAngle(hip, knee, ankle)).toBeCloseTo(0, 5);
    });

    it('handles 3D keypoints, not just the 2D image plane', () => {
      const hip = point(BlazePoseLandmark.LeftHip, 0, 0, 1);
      const knee = point(BlazePoseLandmark.LeftKnee, 0, 0, 0);
      const ankle = point(BlazePoseLandmark.LeftAnkle, 0, 1, 0);

      expect(service.calculateAngle(hip, knee, ankle)).toBeCloseTo(90, 5);
    });

    it('returns 0 for degenerate (coincident) points instead of NaN', () => {
      const knee = point(BlazePoseLandmark.LeftKnee, 0, 0);

      expect(service.calculateAngle(knee, knee, knee)).toBe(0);
    });
  });

  describe('isWithinRange', () => {
    it('is true at the boundaries (inclusive)', () => {
      expect(service.isWithinRange(90, 80, 100)).toBe(true);
      expect(service.isWithinRange(80, 80, 100)).toBe(true);
      expect(service.isWithinRange(100, 80, 100)).toBe(true);
    });

    it('is false outside the range', () => {
      expect(service.isWithinRange(79.9, 80, 100)).toBe(false);
      expect(service.isWithinRange(100.1, 80, 100)).toBe(false);
    });
  });
});
