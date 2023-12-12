import { ChangeDetectorRef, Component } from '@angular/core';
import { Role, User } from './dtos/user';
import { AuthenticationService } from './services/authentication.service';
import { MediaMatcher } from '@angular/cdk/layout';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ens-client';
  user?: User | null;


  get isAdmin() {
      return this.user?.role === Role.Admin;
  }

  logout() {
      this.authenticationService.logout();
  }


  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(private authenticationService: AuthenticationService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.authenticationService.user.subscribe(x => this.user = x);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
