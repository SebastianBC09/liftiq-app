import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Keypoint } from '@core/models/keypoint.model';

@Component({
  selector: 'skeleton-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton-overlay.component.html',
  styleUrl: './skeleton-overlay.component.scss',
})
export class SkeletonOverlayComponent {
  calibrationMode = false;

  shoulder: Keypoint = { name: 'Hombro', xPercent: 42, yPercent: 28, score: 0.92 };
  hip: Keypoint = { name: 'Cadera', xPercent: 46, yPercent: 55, score: 0.74 };
  knee: Keypoint = { name: 'Rodilla', xPercent: 48, yPercent: 78, score: 0.55 };

  dotColor(kp: Keypoint): string {
    if (!this.calibrationMode) {
      return 'var(--liq-sky-blue)';
    }
    if (kp.score >= 0.85) return 'var(--liq-good)';
    if (kp.score >= 0.6) return 'var(--liq-warn)';
    return 'var(--liq-error)';
  }
}
