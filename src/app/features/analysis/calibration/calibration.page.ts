import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

// TODO: Needs CameraService + PoseDetectionService streaming into the reused <app-skeleton-overlay [calibrationMode]="true">.
// Routed and reachable today; real bindings/content land in a follow-up pass.
@Component({
  selector: 'app-calibration-page',
  standalone: true,
  imports: [IonContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calibration.page.html',
  styleUrl: './calibration.page.scss',
})
export class CalibrationPage {}
