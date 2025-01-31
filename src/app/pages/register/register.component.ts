import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModel, FormsModule } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  user = { name: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  async register() {
    try {
      await this.authService.register(this.user);
      alert('Registration successful!');
      this.router.navigate(['/login']);
    } catch (err: any) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  }
  
}
