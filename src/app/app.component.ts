import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * Main Component of this app.
 */
export class AppComponent {
  title = 'galaxe';

  constructor(private router: Router) {
  }

  /**
   * Executed when a new route activates in the outlet
   * Scrolls the viewport of the browser to the top.
   * @param event routing event
   */
  onActivateRoute(event) {
    window.scroll(0, 0);
  }
}
