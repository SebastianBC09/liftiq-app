import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'step-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-indicator.component.html',
  styleUrl: './step-indicator.component.scss',
})
export class StepIndicatorComponent {
  currentStep = 1;
}
