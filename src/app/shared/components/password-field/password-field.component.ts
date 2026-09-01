import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'password-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './password-field.component.html',
  styleUrl: './password-field.component.scss',
})
export class PasswordFieldComponent {
  value = '';
  label = 'Contraseña';
  placeholder = '';
  errorMessage = '';
  touched = false;
  showStrength = false;
  visible = false;

  onBlur(): void {
    this.touched = true;
  }

  toggleVisibility(): void {
    this.visible = !this.visible;
  }

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
