import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'session-page',
  standalone: true,
  imports: [IonContent],
  templateUrl: './session.page.html',
  styleUrl: './session.page.scss',
})
export class SessionPage {}
