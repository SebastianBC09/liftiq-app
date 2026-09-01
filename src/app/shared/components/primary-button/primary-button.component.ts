import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'primary-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
})
export class PrimaryButtonComponent {
  label = 'Continuar';
  disabled = false;
  loading = false;

  onClick(): void {
    if (this.disabled || this.loading) return;
    this.loading = true;
  }
}
