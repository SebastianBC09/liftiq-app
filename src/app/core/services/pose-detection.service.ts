import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Pose } from '@core/models/keypoint.model';

/**
 * Placeholder for on-device pose inference.
 *
 * TODO: integrate TensorFlow.js + @tensorflow-models/pose-detection
 * (BlazePose). This service will own model loading, pull frames from
 * CameraService, run inference per frame, and emit a `Pose` on `poses$`.
 * Not implemented in this scaffold — see architecture doc section 3.1.
 */
@Injectable({ providedIn: 'root' })
export class PoseDetectionService {
  private readonly posesSubject = new Subject<Pose>();

  /** Emits one detected Pose per processed frame, once the model is loaded and running. */
  readonly poses$: Observable<Pose> = this.posesSubject.asObservable();

  private modelLoaded = false;

  async loadModel(): Promise<void> {
    // TODO: tf.setBackend('webgl'); load the BlazePose graph model.
    this.modelLoaded = true;
  }

  isModelLoaded(): boolean {
    return this.modelLoaded;
  }

  stop(): void {
    // TODO: cancel the requestAnimationFrame inference loop and dispose tensors.
  }
}
