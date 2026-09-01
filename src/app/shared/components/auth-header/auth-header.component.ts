import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-header',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './auth-header.component.html',
  styleUrl: './auth-header.component.scss',
})
export class AuthHeaderComponent {
  /** Property binding: e.g. "Bienvenido de vuelta". */
  @Input({ required: true }) title = '';

  /** Property binding: e.g. "Inicia sesión para continuar tu progreso". */
  @Input() subtitle = '';
}
