import { Injectable } from '@angular/core';

import { Keypoint } from '@core/models/keypoint.model';

/**
 * Pure biomechanical geometry. Unlike PoseDetectionService/CameraService/
 * CalibrationService, this has no TF.js or camera dependency — it only
 * operates on already-detected keypoints — so it's fully implemented here
 * rather than a placeholder, and covered by unit tests per the architecture
 * doc's testing section ("BiomechanicsService.calculateAngle() — algoritmo
 * crítico").
 */
@Injectable({ providedIn: 'root' })
export class BiomechanicsService {
  /**
   * Calculates the joint angle (in degrees, 0-180) at vertex `b`, formed by
   * the rays b→a and b→c. Used to measure joint flexion, e.g. the knee
   * angle from hip/knee/ankle keypoints.
   */
  calculateAngle(a: Keypoint, b: Keypoint, c: Keypoint): number {
    const ba = { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
    const bc = { x: c.x - b.x, y: c.y - b.y, z: c.z - b.z };

    const magnitudeBa = this.magnitude(ba);
    const magnitudeBc = this.magnitude(bc);
    if (magnitudeBa === 0 || magnitudeBc === 0) {
      return 0;
    }

    const dotProduct = ba.x * bc.x + ba.y * bc.y + ba.z * bc.z;
    const cosineAngle = this.clamp(dotProduct / (magnitudeBa * magnitudeBc), -1, 1);
    return (Math.acos(cosineAngle) * 180) / Math.PI;
  }

  /** Whether `angle` falls within the exercise's ideal `[min, max]` range. */
  isWithinRange(angle: number, min: number, max: number): boolean {
    return angle >= min && angle <= max;
  }

  private magnitude(vector: { x: number; y: number; z: number }): number {
    return Math.sqrt(vector.x ** 2 + vector.y ** 2 + vector.z ** 2);
  }

  private clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }
}
