import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Same custom two-way pattern as TextFieldComponent
 * (@Input value + @Output valueChange -> [(value)]), plus:
 *  - a local `visible` flag (component-owned state, not an @Input) toggled
 *    by (click) on the show/hide button — a plain event binding, no @Output
 *    needed since nothing outside this component cares about it.
 *  - a `strength` getter that feeds the red/amber/green password-strength
 *    meter (property binding), matching the semantic color system also used
 *    in the live BMI calculation and the exercise angle analyzer.
 */
@Component({
  selector: 'app-password-field',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './password-field.component.html',
  styleUrl: './password-field.component.scss',
})
export class PasswordFieldComponent {
  /** Two-way binding half 1. */
  @Input() value = '';

  /** Two-way binding half 2. */
  @Output() valueChange = new EventEmitter<string>();

  @Input() label = 'Contraseña';
  @Input() placeholder = '';
  @Input() errorMessage = '';
  @Input() touched = false;

  /** Property binding: shows the strength meter (register) vs. hides it (login). */
  @Input() showStrength = false;

  @Output() fieldBlur = new EventEmitter<void>();

  /** Local UI state — not exposed as an @Input/@Output, purely internal. */
  visible = false;

  onInput(next: string): void {
    this.value = next;
    this.valueChange.emit(next);
  }

  onBlur(): void {
    this.fieldBlur.emit();
  }

  toggleVisibility(): void {
    this.visible = !this.visible;
  }

  /** 0 (empty) to 3 (strong). Simple length/variety heuristic — no service. */
  get strengthScore(): number {
    if (!this.value) return 0;
    let score = 0;
    if (this.value.length >= 8) score++;
    if (/[A-Z]/.test(this.value) && /[0-9]/.test(this.value)) score++;
    if (/[^A-Za-z0-9]/.test(this.value)) score++;
    return score;
  }

  get strengthColor(): string {
    switch (this.strengthScore) {
      case 0:
        return 'var(--liq-error)';
      case 1:
        return 'var(--liq-error)';
      case 2:
        return 'var(--liq-warn)';
      default:
        return 'var(--liq-good)';
    }
  }

  get strengthLabel(): string {
    switch (this.strengthScore) {
      case 0:
        return 'Muy débil';
      case 1:
        return 'Débil';
      case 2:
        return 'Aceptable';
      default:
        return 'Fuerte';
    }
  }
}
