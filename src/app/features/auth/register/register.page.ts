import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

import { AuthHeaderComponent } from '@shared/components/auth-header/auth-header.component';
import { TextFieldComponent } from '@shared/components/text-field/text-field.component';
import { PasswordFieldComponent } from '@shared/components/password-field/password-field.component';
import { PrimaryButtonComponent } from '@shared/components/primary-button/primary-button.component';
import { ChipSelectComponent, ChipOption } from '@shared/components/chip-select/chip-select.component';
import { StepIndicatorComponent } from '@shared/components/step-indicator/step-indicator.component';
import { ExperienceLevel } from '@core/models/user.model';

/**
 * Two-step register flow kept in ONE component with plain properties
 * (no ReactiveFormsModule / FormGroup yet — that's a step beyond what's
 * been covered, so *ngIf switches between "step 1" and "step 2" markup
 * while state just lives on the class, same as login.page.ts).
 *
 * Step 1: credentials — name, email, password, confirm password.
 * Step 2: physical metrics — height, weight (live BMI), experience level
 * (chip-select, reused from the Explorar muscle-group filter).
 */
@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonContent,
    AuthHeaderComponent,
    TextFieldComponent,
    PasswordFieldComponent,
    PrimaryButtonComponent,
    ChipSelectComponent,
    StepIndicatorComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './register.page.html',
  styleUrl: './register.page.scss',
})
export class RegisterPage {
  constructor(private readonly router: Router) {}

  currentStep = 1;
  readonly totalSteps = 2;

  // Step 1 state — each two-way bound to a shared field component.
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  nameTouched = false;
  emailTouched = false;
  passwordTouched = false;
  confirmTouched = false;

  // Step 2 state.
  heightCm: number | null = null;
  weightKg: number | null = null;
  experienceLevel: ExperienceLevel | string | null = null;
  submitting = false;

  readonly experienceOptions: ChipOption[] = [
    { value: 'beginner', label: 'Principiante' },
    { value: 'intermediate', label: 'Intermedio' },
    { value: 'advanced', label: 'Avanzado' },
  ];

  get emailError(): string {
    if (!this.email) return 'El correo es obligatorio';
    if (!this.email.includes('@')) return 'Ingresa un correo válido';
    return '';
  }

  get passwordError(): string {
    return this.password.length >= 8 ? '' : 'Mínimo 8 caracteres';
  }

  get confirmError(): string {
    return this.confirmPassword === this.password ? '' : 'Las contraseñas no coinciden';
  }

  get step1Invalid(): boolean {
    return !this.name || !!this.emailError || !!this.passwordError || !!this.confirmError;
  }

  /** Live BMI — recalculates on every keystroke since height/weight are
   *  two-way bound; purely a computed getter, no service involved. */
  get bmi(): number | null {
    if (!this.heightCm || !this.weightKg) return null;
    const heightM = this.heightCm / 100;
    return this.weightKg / (heightM * heightM);
  }

  get bmiColor(): string {
    const value = this.bmi;
    if (value === null) return 'var(--liq-text-35)';
    if (value < 18.5 || value >= 30) return 'var(--liq-error)';
    if (value >= 25) return 'var(--liq-warn)';
    return 'var(--liq-good)';
  }

  get step2Invalid(): boolean {
    return !this.heightCm || !this.weightKg || !this.experienceLevel;
  }

  goToStep2(): void {
    this.nameTouched = true;
    this.emailTouched = true;
    this.passwordTouched = true;
    this.confirmTouched = true;
    if (this.step1Invalid) return;
    this.currentStep = 2;
  }

  goToStep1(): void {
    this.currentStep = 1;
  }

  onSubmit(): void {
    if (this.step2Invalid) return;

    // TODO: replace with AuthService.register(...) once
    // core/services/auth.service.ts is implemented.
    this.submitting = true;
    setTimeout(() => {
      this.submitting = false;
      this.router.navigateByUrl('/tabs/explorar');
    }, 600);
  }
}
