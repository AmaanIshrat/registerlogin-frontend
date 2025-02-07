import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const user = { name: this.name, email: this.email, password: this.password };
    this.authService.register(user).subscribe(
      (res) => {
        alert('Registration successful!');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }
}
