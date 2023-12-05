import { Component } from '@angular/core';
import { Role, User } from './dtos/user';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ens-client';
  user?: User | null;

  constructor(private authenticationService: AuthenticationService) {
      this.authenticationService.user.subscribe(x => this.user = x);
  }

  get isAdmin() {
      return this.user?.role === Role.Admin;
  }

  logout() {
      this.authenticationService.logout();
  }
}
