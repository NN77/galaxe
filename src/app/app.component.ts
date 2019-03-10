import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'galaxe';

  constructor(private router: Router) {
  }

  onActivateRoute(event) {
    window.scroll(0, 0);
  }
}
