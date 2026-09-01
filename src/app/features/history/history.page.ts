import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

// TODO: Needs GET /api/v1/sessions + /stats/weekly and a charting library for the weekly bar chart / progress line chart.
// Routed and reachable today; real bindings/content land in a follow-up pass.
@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [IonContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './history.page.html',
  styleUrl: './history.page.scss',
})
export class HistoryPage {}
