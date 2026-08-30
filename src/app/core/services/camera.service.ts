import { Injectable } from '@angular/core';

/**
 * Placeholder for native camera access.
 *
 * TODO: integrate @capacitor-community/camera-preview. This will manage
 * starting/stopping the live preview, switching front/back camera, and
 * exposing frames for PoseDetectionService to run inference on. Not
 * implemented in this scaffold — see architecture doc section 3.1.
 */
@Injectable({ providedIn: 'root' })
export class CameraService {
  private previewActive = false;
  private usingFrontCamera = true;

  async startPreview(): Promise<void> {
    // TODO: CameraPreview.start({ position: this.usingFrontCamera ? 'front' : 'rear', ... })
    this.previewActive = true;
  }

  async stopPreview(): Promise<void> {
    // TODO: CameraPreview.stop()
    this.previewActive = false;
  }

  async switchCamera(): Promise<void> {
    // TODO: CameraPreview.flip()
    this.usingFrontCamera = !this.usingFrontCamera;
  }

  isPreviewActive(): boolean {
    return this.previewActive;
  }
}
