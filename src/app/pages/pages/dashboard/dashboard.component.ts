import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {
  sessionTime: string = '00:00:00';
  private intervalId: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.startSessionTimer();
  }
// hii 
  startSessionTimer() {
    const loginTime = Number(localStorage.getItem('loginTime'));
    if (!loginTime) return;

    this.intervalId = setInterval(() => {
      const elapsed = Date.now() - loginTime;
      this.sessionTime = this.formatTime(elapsed);
    }, 1000);
  }

  formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  pad(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('loginTime'); // Clear login time
    clearInterval(this.intervalId); // Stop timer
    this.router.navigate(['/login']); // Redirect to login page
  }

  ngOnDestroy() {
    clearInterval(this.intervalId); // Stop the timer when leaving the page
  }
}
