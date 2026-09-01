import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'auth-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-header.component.html',
  styleUrl: './auth-header.component.scss',
})
export class AuthHeaderComponent {
  title = 'Bienvenido de vuelta';
  subtitle = 'Inicia sesión para continuar tu progreso';
}
