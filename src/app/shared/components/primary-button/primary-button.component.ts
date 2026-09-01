import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Dumb component: <app-primary-button label="Continuar" [disabled]="form.invalid"
 *                                      [loading]="submitting" (pressed)="onSubmit()">
 */
@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
})
export class PrimaryButtonComponent {
  /** Property binding: button text. */
  @Input({ required: true }) label = '';

  /** Property binding: [disabled] on the native <button>, e.g. while a
   *  request is in flight or the form is invalid. */
  @Input() disabled = false;

  /** Property binding: swaps the label for a spinner. */
  @Input() loading = false;

  /** Event binding: emitted on tap, only when not disabled/loading. */
  @Output() pressed = new EventEmitter<void>();

  onClick(): void {
    if (this.disabled || this.loading) return;
    this.pressed.emit();
  }
}
