/** The 33 BlazePose full-body landmarks (3D). */
export enum BlazePoseLandmark {
  Nose = 'nose',
  LeftEyeInner = 'left_eye_inner',
  LeftEye = 'left_eye',
  LeftEyeOuter = 'left_eye_outer',
  RightEyeInner = 'right_eye_inner',
  RightEye = 'right_eye',
  RightEyeOuter = 'right_eye_outer',
  LeftEar = 'left_ear',
  RightEar = 'right_ear',
  MouthLeft = 'mouth_left',
  MouthRight = 'mouth_right',
  LeftShoulder = 'left_shoulder',
  RightShoulder = 'right_shoulder',
  LeftElbow = 'left_elbow',
  RightElbow = 'right_elbow',
  LeftWrist = 'left_wrist',
  RightWrist = 'right_wrist',
  LeftPinky = 'left_pinky',
  RightPinky = 'right_pinky',
  LeftIndex = 'left_index',
  RightIndex = 'right_index',
  LeftThumb = 'left_thumb',
  RightThumb = 'right_thumb',
  LeftHip = 'left_hip',
  RightHip = 'right_hip',
  LeftKnee = 'left_knee',
  RightKnee = 'right_knee',
  LeftAnkle = 'left_ankle',
  RightAnkle = 'right_ankle',
  LeftHeel = 'left_heel',
  RightHeel = 'right_heel',
  LeftFootIndex = 'left_foot_index',
  RightFootIndex = 'right_foot_index',
}

/** A single detected landmark, as emitted per-frame by PoseDetectionService. */
export interface Keypoint {
  name: BlazePoseLandmark;
  x: number;
  y: number;
  z: number;
  /** Model confidence for this landmark, in the range [0, 1]. */
  score: number;
}

export type Pose = Keypoint[];

/** Visibility bucket driving `[class.visible|partial|missing]` on the calibration checklist. */
export type KeypointVisibility = 'visible' | 'partial' | 'missing';

export interface CalibrationKeypointStatus {
  landmark: BlazePoseLandmark;
  score: number;
  visibility: KeypointVisibility;
}

/** In-memory state owned by CalibrationService during the calibration screen. */
export interface CalibrationState {
  requiredLandmarks: BlazePoseLandmark[];
  keypointStatuses: CalibrationKeypointStatus[];
  overallConfidence: number;
  isCalibrated: boolean;
  suggestion: string | null;
}
