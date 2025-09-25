import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-status.component.html'
})
export class LoginStatusComponent {
  isLoggedIn = true; // change to false to test alternate message
}
