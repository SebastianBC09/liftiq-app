import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

import { AuthHeaderComponent } from '@shared/components/auth-header/auth-header.component';
import { TextFieldComponent } from '@shared/components/text-field/text-field.component';
import { PasswordFieldComponent } from '@shared/components/password-field/password-field.component';
import { PrimaryButtonComponent } from '@shared/components/primary-button/primary-button.component';

@Component({
  selector: 'login-page',
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
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
})
export class LoginPage {}
