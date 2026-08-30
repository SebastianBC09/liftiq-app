import { Component } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { IonApp } from '@ionic/angular/ion-app';

@Component({
  selector: 'app-root',
  imports: [IonApp, IonRouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
