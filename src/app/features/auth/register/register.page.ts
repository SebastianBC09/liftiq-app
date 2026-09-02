import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

import { AuthHeaderComponent } from '@shared/components/auth-header/auth-header.component';
import { TextFieldComponent } from '@shared/components/text-field/text-field.component';
import { PasswordFieldComponent } from '@shared/components/password-field/password-field.component';
import { PrimaryButtonComponent } from '@shared/components/primary-button/primary-button.component';
import { ChipSelectComponent } from '@shared/components/chip-select/chip-select.component';
import { StepIndicatorComponent } from '@shared/components/step-indicator/step-indicator.component';

@Component({
  selector: 'register-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonContent,
    AuthHeaderComponent,
    TextFieldComponent,
    PasswordFieldComponent,
    PrimaryButtonComponent,
    ChipSelectComponent,
    StepIndicatorComponent,
  ],
  templateUrl: './register.page.html',
  styleUrl: './register.page.scss',
})
export class RegisterPage {
  constructor(private readonly router: Router) {}

  currentStep = 1;

  heightCm: number | null = null;
  weightKg: number | null = null;
  submitting = false;

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

  goToStep2(): void {
    this.currentStep = 2;
  }

  goToStep1(): void {
    this.currentStep = 1;
  }

  onSubmit(): void {
    this.submitting = true;
    setTimeout(() => {
      this.submitting = false;
      this.router.navigateByUrl('/tabs/explorar');
    }, 600);
  }
}
