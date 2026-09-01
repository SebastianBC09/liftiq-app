import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Dumb component: <app-rep-counter [count]="repCount" (repDone)="onRepCompleted($event)">
 *
 * In the finished app, `repDone` fires automatically from the rep-detection
 * algorithm (BiomechanicsService watching the knee/hip angle trajectory —
 * out of scope here). For now there's a manual "+ rep" button so the event
 * binding is demonstrable and testable on its own, without any service.
 */
@Component({
  selector: 'app-rep-counter',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './rep-counter.component.html',
  styleUrl: './rep-counter.component.scss',
})
export class RepCounterComponent {
  /** Property binding: current rep count, owned and incremented by the parent. */
  @Input() count = 0;

  /** Event binding: emits the *next* rep number when a rep is detected. */
  @Output() repDone = new EventEmitter<number>();

  onManualRep(): void {
    this.repDone.emit(this.count + 1);
  }
}
