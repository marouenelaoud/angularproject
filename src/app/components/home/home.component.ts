import { Component } from '@angular/core';
import { AuthService } from '../../authentification/auth.service'; // Update the path as needed

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.doLogout();
  }
}
