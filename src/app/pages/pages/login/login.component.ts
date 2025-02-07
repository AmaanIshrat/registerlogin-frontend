import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const user = { email: this.email, password: this.password };
    this.authService.login(user).subscribe(
      (res) => {
        this.authService.saveToken(res.token); // Save JWT token
        localStorage.setItem('loginTime', Date.now().toString()); // Store login time
        alert('Login successful!');
        this.router.navigate(['/dashboard']); // Redirect to dashboard
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }

}
