import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export type FeedbackSeverity = 'good' | 'warn' | 'error';

@Component({
  selector: 'feedback-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback-card.component.html',
  styleUrl: './feedback-card.component.scss',
})
export class FeedbackCardComponent {
  message = 'Mantén la espalda recta';
  severity: FeedbackSeverity = 'warn';
  dismissed = false;

  onDismiss(): void {
    this.dismissed = true;
  }
}
