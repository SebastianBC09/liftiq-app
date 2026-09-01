import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

// TODO: Needs the route param (:id), animation/instructions rendering, and joint-angle reference table from GET /api/v1/exercises/{id}.
// Routed and reachable today; real bindings/content land in a follow-up pass.
@Component({
  selector: 'app-exercise-detail-page',
  standalone: true,
  imports: [IonContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './exercise-detail.page.html',
  styleUrl: './exercise-detail.page.scss',
})
export class ExerciseDetailPage {}
