import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx';

  constructor(private userService: UserService) {
    this.userService.getHeroes().subscribe(heroes => console.log(heroes));
  }
}
