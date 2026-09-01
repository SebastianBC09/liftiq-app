import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Pure display component for the 2-step register flow — no @Output at all,
 * just property bindings. <app-step-indicator [currentStep]="step" [totalSteps]="2">
 */
@Component({
  selector: 'app-step-indicator',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './step-indicator.component.html',
  styleUrl: './step-indicator.component.scss',
})
export class StepIndicatorComponent {
  @Input({ required: true }) currentStep = 1;
  @Input({ required: true }) totalSteps = 2;

  get steps(): number[] {
    return Array.from({ length: this.totalSteps }, (_, i) => i + 1);
  }
}
