import { Component } from '@angular/core';
import { UserDataService } from "app/user-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserDataService]
})
export class AppComponent {
  title = 'My App';
  hasUsers = false;

  constructor(private _userService: UserDataService) { }

  addUser(name: string): void {
    if (name) {
      this._userService.addUser(name);
      this.hasUsers = true;
    }
  }

  getUserList(): string[] {
    return this._userService.getUserList();
  }
}
