import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ChipOption {
  value: string;
  label: string;
}

/**
 * Generic, reusable chip list — intentionally not specific to any one
 * feature, so it can back both:
 *  - Register step 2: experience level (single-select: principiante /
 *    intermedio / avanzado)
 *  - Explorar tab: muscle-group filter (single-select: Todos / Piernas /
 *    Pecho / ...)
 *
 * Custom two-way binding: [(selected)] via @Input selected + @Output
 * selectedChange, same pattern as text-field/password-field.
 */
@Component({
  selector: 'app-chip-select',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chip-select.component.html',
  styleUrl: './chip-select.component.scss',
})
export class ChipSelectComponent {
  /** Property binding: the chips to render. */
  @Input({ required: true }) options: ChipOption[] = [];

  /** Property binding: allows more than one chip active at once (not used
   *  today, but keeps the component generic for a future multi-filter). */
  @Input() multi = false;

  /** Two-way binding half 1. */
  @Input() selected: string | string[] | null = null;

  /** Two-way binding half 2. */
  @Output() selectedChange = new EventEmitter<string | string[] | null>();

  isActive(value: string): boolean {
    if (this.multi && Array.isArray(this.selected)) {
      return this.selected.includes(value);
    }
    return this.selected === value;
  }

  onSelect(value: string): void {
    if (this.multi) {
      const current = Array.isArray(this.selected) ? [...this.selected] : [];
      const idx = current.indexOf(value);
      if (idx >= 0) {
        current.splice(idx, 1);
      } else {
        current.push(value);
      }
      this.selected = current;
      this.selectedChange.emit(current);
      return;
    }
    this.selected = value;
    this.selectedChange.emit(value);
  }
}
