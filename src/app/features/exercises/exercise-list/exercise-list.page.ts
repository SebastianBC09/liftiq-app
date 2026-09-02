import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonSearchbar } from '@ionic/angular/standalone';
import { ChipSelectComponent } from '@shared/components/chip-select/chip-select.component';

@Component({
  selector: 'exercise-list-page',
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonSearchbar, ChipSelectComponent],
  templateUrl: './exercise-list.page.html',
  styleUrl: './exercise-list.page.scss',
})
export class ExerciseListPage {
  constructor(private readonly router: Router) {}
  searchTerm = '';

  squatName = 'Sentadilla libre';
  squatGroup = 'Piernas';
  squatFav = true;

  deadliftName = 'Peso muerto';
  deadliftGroup = 'Espalda';
  deadliftFav = false;

  benchName = 'Press banca';
  benchGroup = 'Pecho';
  benchFav = false;

  toggleSquatFav(event: Event): void {
    event.stopPropagation();
    this.squatFav = !this.squatFav;
  }

  toggleDeadliftFav(event: Event): void {
    event.stopPropagation();
    this.deadliftFav = !this.deadliftFav;
  }

  toggleBenchFav(event: Event): void {
    event.stopPropagation();
    this.benchFav = !this.benchFav;
  }

  openDetail(id: string): void {
    this.router.navigate(['/exercises', id]);
  }
}
