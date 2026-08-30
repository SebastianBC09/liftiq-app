import { Injectable, signal } from '@angular/core';

import { BlazePoseLandmark, CalibrationState } from '@core/models/keypoint.model';
import { environment } from '../../../environments/environment';

const EMPTY_STATE: CalibrationState = {
  requiredLandmarks: [],
  keypointStatuses: [],
  overallConfidence: 0,
  isCalibrated: false,
  suggestion: null,
};

/**
 * In-memory singleton that owns calibration state (active stream, required
 * keypoints, accumulated confidence score) and hands it off to the analysis
 * page once calibration succeeds. Never persisted to the backend — see
 * "Nota sobre calibración y backend" in the project prompt.
 *
 * TODO: once PoseDetectionService is implemented, subscribe to `poses$`
 * here and evaluate per-frame keypoint visibility against
 * `requiredLandmarks`. The threshold/hold-duration logic below is already
 * wired up so the calibration page can be built against a stable contract.
 */
@Injectable({ providedIn: 'root' })
export class CalibrationService {
  private readonly _state = signal<CalibrationState>(EMPTY_STATE);
  readonly state = this._state.asReadonly();

  private readonly confidenceThreshold = environment.calibrationThreshold;
  private readonly holdSeconds = environment.calibrationHoldSeconds;

  startCalibration(requiredLandmarks: BlazePoseLandmark[]): void {
    this._state.set({ ...EMPTY_STATE, requiredLandmarks });
  }

  reset(): void {
    this._state.set(EMPTY_STATE);
  }

  /** Whether `confidence` clears the threshold required to enable "Continuar". */
  meetsThreshold(confidence: number): boolean {
    return confidence >= this.confidenceThreshold;
  }

  /** How long the threshold must hold before calibration is considered successful. */
  getHoldDurationMs(): number {
    return this.holdSeconds * 1000;
  }
}
