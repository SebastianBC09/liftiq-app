import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Keypoint } from '@core/models/keypoint.model';

/**
 * Dumb/presentational component — no services injected, only @Input.
 *
 * Simplified vs. the original spec: instead of drawing on a <canvas> (which
 * needs shared/directives/canvas-renderer.directive.ts — out of scope for
 * now), it positions one absolutely-placed dot per keypoint with
 * [style.left.%] / [style.top.%]. Same idea, pure property binding.
 *
 * Reused in two places (see LiftIQ-project-prompt.md):
 *  - Calibration screen: `calibrationMode = true` → dots colored by score
 *    (red/amber/green).
 *  - Session screen: `calibrationMode = false` → dots colored sky blue,
 *    like a plain skeleton.
 */
@Component({
  selector: 'app-skeleton-overlay',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skeleton-overlay.component.html',
  styleUrl: './skeleton-overlay.component.scss',
})
export class SkeletonOverlayComponent {
  /** Property binding: the parent (session or calibration page) passes the
   *  current frame's keypoints down every tick. */
  @Input({ required: true }) keypoints: Keypoint[] = [];

  /** Property binding: toggles the color rule used per dot. */
  @Input() calibrationMode = false;

  dotColor(kp: Keypoint): string {
    if (!this.calibrationMode) {
      return 'var(--liq-sky-blue)';
    }
    if (kp.score >= 0.85) return 'var(--liq-good)';
    if (kp.score >= 0.6) return 'var(--liq-warn)';
    return 'var(--liq-error)';
  }
}
