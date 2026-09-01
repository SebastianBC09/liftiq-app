/**
 * A single BlazePose keypoint projected onto the camera view as percentages
 * (0–100) of the container's width/height, plus its detection confidence.
 *
 * This is a plain type — the real BlazePose integration (33 3D keypoints,
 * TensorFlow.js inference) is out of scope for this UI-bindings milestone.
 * See core/services/pose-detection.service.ts.
 */
export interface Keypoint {
  name: string;
  xPercent: number;
  yPercent: number;
  /** Detection confidence, 0–1. Used to color the dot during calibration. */
  score: number;
}
