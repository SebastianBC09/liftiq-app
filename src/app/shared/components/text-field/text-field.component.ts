import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Custom two-way binding.
 *
 * Pairing an @Input() named `value` with an @Output() named `valueChange`
 * is exactly what unlocks Angular's banana-in-a-box syntax on the parent:
 *
 *   <app-text-field [(value)]="form.email" label="Correo"></app-text-field>
 *
 * is sugar for:
 *
 *   <app-text-field [value]="form.email" (valueChange)="form.email = $event">
 */
@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss',
})
export class TextFieldComponent {
  /** Two-way binding half 1: current value, owned by the parent's form state. */
  @Input() value = '';

  /** Two-way binding half 2: notifies the parent whenever the input changes. */
  @Output() valueChange = new EventEmitter<string>();

  /** Property binding: field label, e.g. "Correo electrónico". */
  @Input({ required: true }) label = '';

  /** Property binding: native input type ('text' | 'email' | 'number' | ...). */
  @Input() type = 'text';

  @Input() placeholder = '';

  /** Property binding: validation message shown under the field, if any. */
  @Input() errorMessage = '';

  /** Property binding: whether the field has been visited (blurred) yet —
   *  used to decide if `errorMessage` should be visible. */
  @Input() touched = false;

  /** Event binding: bubbles up so the parent can mark the field as touched. */
  @Output() fieldBlur = new EventEmitter<void>();

  onInput(next: string): void {
    this.value = next;
    this.valueChange.emit(next);
  }

  onBlur(): void {
    this.fieldBlur.emit();
  }
}
