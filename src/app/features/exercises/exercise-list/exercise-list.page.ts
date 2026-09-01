import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent, IonSearchbar } from '@ionic/angular/standalone';

import { ChipSelectComponent, ChipOption } from '@shared/components/chip-select/chip-select.component';
import { Exercise, MuscleGroup } from '@core/models/exercise.model';

/**
 * Reference implementation for "Tab 1 — Explorar ejercicios"
 * (LiftIQ-project-prompt.md). Demonstrates, all in one screen:
 *  - two-way binding on the searchbar ([(ngModel)]-equivalent via (ionInput))
 *  - the SAME chip-select reused from Register step 2, now single-selecting
 *    a muscle group instead of an experience level
 *  - *ngFor + *ngIf for the card list / empty state
 *  - [class.favorited] property binding + (click) event binding to toggle it
 *
 * The 35-exercise catalog itself will come from GET /api/v1/exercises via
 * core/services/api.service.ts (blank stub) — this page uses a small
 * hardcoded sample so the bindings above are demonstrable today.
 */
@Component({
  selector: 'app-exercise-list-page',
  standalone: true,
  imports: [CommonModule, IonContent, IonSearchbar, ChipSelectComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './exercise-list.page.html',
  styleUrl: './exercise-list.page.scss',
})
export class ExerciseListPage {
  constructor(private readonly router: Router) {}

  // Two-way bound to <ion-searchbar [(ngModel)]="searchTerm">
  searchTerm = '';

  readonly groupOptions: ChipOption[] = [
    { value: 'all', label: 'Todos' },
    { value: 'legs', label: 'Piernas' },
    { value: 'chest', label: 'Pecho' },
    { value: 'back', label: 'Espalda' },
    { value: 'shoulders', label: 'Hombros' },
    { value: 'biceps', label: 'Bíceps' },
    { value: 'triceps', label: 'Tríceps' },
    { value: 'core', label: 'Core' },
  ];

  activeGroup: string | string[] | null = 'all';

  private readonly groupLabels: Record<MuscleGroup, string> = {
    chest: 'Pecho',
    back: 'Espalda',
    legs: 'Piernas',
    shoulders: 'Hombros',
    biceps: 'Bíceps',
    triceps: 'Tríceps',
    core: 'Core',
  };

  // Sample data — the real catalog is 35+ exercises from the backend seed
  // script (see LiftIQ-project-prompt.md § Seed data).
  exercises: Exercise[] = [
    {
      id: 'squat',
      name: 'Sentadilla libre',
      muscleGroup: 'legs',
      difficulty: 'medium',
      description: '',
      instructions: [],
      commonMistakes: [],
      jointAngles: {},
      primaryMuscles: [],
      secondaryMuscles: [],
      isFavorite: true,
    },
    {
      id: 'deadlift',
      name: 'Peso muerto',
      muscleGroup: 'back',
      difficulty: 'hard',
      description: '',
      instructions: [],
      commonMistakes: [],
      jointAngles: {},
      primaryMuscles: [],
      secondaryMuscles: [],
      isFavorite: false,
    },
    {
      id: 'bench-press',
      name: 'Press banca',
      muscleGroup: 'chest',
      difficulty: 'medium',
      description: '',
      instructions: [],
      commonMistakes: [],
      jointAngles: {},
      primaryMuscles: [],
      secondaryMuscles: [],
      isFavorite: false,
    },
  ];

  groupLabel(group: MuscleGroup): string {
    return this.groupLabels[group];
  }

  get filteredExercises(): Exercise[] {
    return this.exercises.filter((exercise) => {
      const matchesGroup = this.activeGroup === 'all' || exercise.muscleGroup === this.activeGroup;
      const matchesSearch = exercise.name
        .toLowerCase()
        .includes(this.searchTerm.trim().toLowerCase());
      return matchesGroup && matchesSearch;
    });
  }

  onSearchChange(value: string | null | undefined): void {
    this.searchTerm = value ?? '';
  }

  toggleFavorite(exercise: Exercise, event: Event): void {
    // Stop the card's own (click) from also firing navigation.
    event.stopPropagation();
    // TODO: call FavoritesService.toggle(exercise.id) once implemented —
    // for now this only updates local UI state.
    exercise.isFavorite = !exercise.isFavorite;
  }

  openDetail(exercise: Exercise): void {
    this.router.navigate(['/exercises', exercise.id]);
  }
}
