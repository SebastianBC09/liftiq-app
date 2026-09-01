import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Dumb component: <app-metrics-gauge [angle]="kneeAngle" [label]="'Rodilla'" [ideal]="90">
 * `statusColor` is a plain getter (no HTTP, no service) that feeds a
 * [style.color] property binding in the template.
 */
@Component({
  selector: 'app-metrics-gauge',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './metrics-gauge.component.html',
  styleUrl: './metrics-gauge.component.scss',
})
export class MetricsGaugeComponent {
  /** Property binding: current joint angle in degrees. */
  @Input({ required: true }) angle!: number;

  /** Property binding: joint label, e.g. "Rodilla". */
  @Input({ required: true }) label!: string;

  /** Property binding: the ideal angle for this exercise/joint. */
  @Input() ideal = 90;

  /** Property binding: how many degrees off `ideal` still counts as "good". */
  @Input() tolerance = 10;

  get statusColor(): string {
    const diff = Math.abs(this.angle - this.ideal);
    if (diff <= this.tolerance) return 'var(--liq-good)';
    if (diff <= this.tolerance * 2) return 'var(--liq-warn)';
    return 'var(--liq-error)';
  }
}
