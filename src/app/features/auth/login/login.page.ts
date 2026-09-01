import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

import { AuthHeaderComponent } from '@shared/components/auth-header/auth-header.component';
import { TextFieldComponent } from '@shared/components/text-field/text-field.component';
import { PasswordFieldComponent } from '@shared/components/password-field/password-field.component';
import { PrimaryButtonComponent } from '@shared/components/primary-button/primary-button.component';

/**
 * Smart component (it owns the Router), but the actual sign-in call is out
 * of scope — core/services/auth.service.ts is a blank stub. `onSubmit()`
 * just demonstrates the wiring: read the two-way-bound fields and navigate.
 */
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonContent,
    AuthHeaderComponent,
    TextFieldComponent,
    PasswordFieldComponent,
    PrimaryButtonComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
})
export class LoginPage {
  constructor(private readonly router: Router) {}

  // Two-way bound to <app-text-field [(value)]="email">
  email = '';
  // Two-way bound to <app-password-field [(value)]="password">
  password = '';

  emailTouched = false;
  passwordTouched = false;
  submitting = false;

  get emailError(): string {
    if (!this.email) return 'El correo es obligatorio';
    if (!this.email.includes('@')) return 'Ingresa un correo válido';
    return '';
  }

  get passwordError(): string {
    return this.password.length >= 8 ? '' : 'Mínimo 8 caracteres';
  }

  get formInvalid(): boolean {
    return !!this.emailError || !!this.passwordError;
  }

  onSubmit(): void {
    this.emailTouched = true;
    this.passwordTouched = true;
    if (this.formInvalid) return;

    // TODO: replace with AuthService.login(this.email, this.password) once
    // core/services/auth.service.ts is implemented.
    this.submitting = true;
    setTimeout(() => {
      this.submitting = false;
      this.router.navigateByUrl('/tabs/explorar');
    }, 600);
  }
}
