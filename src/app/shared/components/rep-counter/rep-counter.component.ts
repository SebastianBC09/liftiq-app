import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rep-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rep-counter.component.html',
  styleUrl: './rep-counter.component.scss',
})
export class RepCounterComponent {
  count = 0;

  onManualRep(): void {
    this.count = this.count + 1;
  }
}
