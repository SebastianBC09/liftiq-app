import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'metrics-gauge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metrics-gauge.component.html',
  styleUrl: './metrics-gauge.component.scss',
})
export class MetricsGaugeComponent {
  angle = 90;
  label = 'Rodilla';
  ideal = 90;
  tolerance = 10;

  get statusColor(): string {
    const diff = Math.abs(this.angle - this.ideal);
    if (diff <= this.tolerance) return 'var(--liq-good)';
    if (diff <= this.tolerance * 2) return 'var(--liq-warn)';
    return 'var(--liq-error)';
  }
}
