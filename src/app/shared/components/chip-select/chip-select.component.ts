import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'chip-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chip-select.component.html',
  styleUrl: './chip-select.component.scss',
})
export class ChipSelectComponent {
  selected = 'beginner';

  isActive(value: string): boolean {
    return this.selected === value;
  }

  onSelect(value: string): void {
    this.selected = value;
  }
}
