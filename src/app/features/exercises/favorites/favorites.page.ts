import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

// TODO: Needs FavoritesService (list/reorder/remove) — ion-reorder-group and ion-item-sliding drag/swipe wiring come with it.
// Routed and reachable today; real bindings/content land in a follow-up pass.
@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [IonContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './favorites.page.html',
  styleUrl: './favorites.page.scss',
})
export class FavoritesPage {}
