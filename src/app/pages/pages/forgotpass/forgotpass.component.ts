import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-forgotpass',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './forgotpass.component.html',
  styleUrl: './forgotpass.component.scss'
})
export class ForgotpassComponent {
  email = '';

  constructor(private authService: AuthService) {}

  forgotPassword() {
    this.authService.forgotPassword(this.email).subscribe(
      (res) => {
        alert('Password reset link sent!');
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }
}
