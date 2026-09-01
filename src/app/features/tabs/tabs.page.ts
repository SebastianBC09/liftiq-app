import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { compassOutline, heartOutline, statsChartOutline, personOutline } from 'ionicons/icons';

/**
 * Pure navigation shell — four ion-tab-button entries, each with a
 * `tab="..."` property binding pointing at the matching child route.
 */
@Component({
  selector: 'app-tabs-page',
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tabs.page.html',
  styleUrl: './tabs.page.scss',
})
export class TabsPage {
  constructor() {
    addIcons({ compassOutline, heartOutline, statsChartOutline, personOutline });
  }
}
