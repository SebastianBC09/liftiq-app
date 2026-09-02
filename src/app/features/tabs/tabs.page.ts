import { Component } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { compassOutline, heartOutline, statsChartOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'tabs-page',
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
  templateUrl: './tabs.page.html',
  styleUrl: './tabs.page.scss',
})
export class TabsPage {
  constructor() {
    addIcons({ compassOutline, heartOutline, statsChartOutline, personOutline });
  }
}
