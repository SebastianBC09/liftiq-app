import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

// TODO: Needs AuthService (current user) + ApiService (PATCH /users/me) for the editable metrics and logout flow.
// Routed and reachable today; real bindings/content land in a follow-up pass.
@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [IonContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './profile.page.html',
  styleUrl: './profile.page.scss',
})
export class ProfilePage {}
