import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resetpass',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './resetpass.component.html',
  styleUrl: './resetpass.component.scss'
})
export class ResetpassComponent {
  newPassword = '';
  token = '';

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {
    this.token = this.route.snapshot.paramMap.get('token') || '';
  }

  resetPassword() {
    this.authService.resetPassword({ token: this.token, newPassword: this.newPassword }).subscribe(
      (res) => {
        alert('Password reset successful!');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }
}
