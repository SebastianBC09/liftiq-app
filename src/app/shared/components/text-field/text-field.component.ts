import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss',
})
export class TextFieldComponent {
  value = '';
  label = 'Correo electrónico';
  type = 'text';
  placeholder = '';
  errorMessage = '';
  touched = false;

  onBlur(): void {
    this.touched = true;
  }
}
