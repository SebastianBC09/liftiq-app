import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

// TODO: Needs CalibrationService handoff + BiomechanicsService to drive <app-metrics-gauge>/<app-rep-counter>/<app-feedback-card> for real.
// Routed and reachable today; real bindings/content land in a follow-up pass.
@Component({
  selector: 'app-session-page',
  standalone: true,
  imports: [IonContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './session.page.html',
  styleUrl: './session.page.scss',
})
export class SessionPage {}
