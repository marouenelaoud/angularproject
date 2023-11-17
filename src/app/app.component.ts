import { Component } from '@angular/core';
import { AuthService } from './authentification/auth.service';


@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-crud-app';

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.doLogout();
  }
}
