import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'paper';

  constructor(private router: Router) {}

  onNavigate(route: string) {
    if (route) {
      this.router.navigateByUrl(`/quiz/${route}`);
    }
  }
}
