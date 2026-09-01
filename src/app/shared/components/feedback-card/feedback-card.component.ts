import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export type FeedbackSeverity = 'good' | 'warn' | 'error';

/**
 * Dumb component. Parent controls visibility with *ngIf, e.g.:
 *   <app-feedback-card *ngIf="activeFeedback" [message]="activeFeedback.text"
 *                       [severity]="activeFeedback.severity"
 *                       (dismissed)="clearFeedback()">
 */
@Component({
  selector: 'app-feedback-card',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './feedback-card.component.html',
  styleUrl: './feedback-card.component.scss',
})
export class FeedbackCardComponent {
  /** Property binding: the message shown, e.g. "Mantén la espalda recta". */
  @Input({ required: true }) message = '';

  /** Property binding: drives the icon + accent color. */
  @Input() severity: FeedbackSeverity = 'warn';

  /** Event binding: emitted when the user taps the dismiss (×) button. */
  @Output() dismissed = new EventEmitter<void>();

  onDismiss(): void {
    this.dismissed.emit();
  }
}
