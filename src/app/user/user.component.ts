import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Store } from '@ngrx/store';
import * as fromAction from './user.action';
import * as fromUser from './user.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: Observable<any>;
  constructor(
    private store: Store<fromUser.State>
  ) { }

  ngOnInit() {
    this.users = this.store.select(fromUser.selectAll);
  }

  create() {
    const user: User = {
      id: 2,
      name: 'aaa'
    };

    this.store.dispatch(new fromAction.AddUser({user: user}));
  }

  update(user) {
    user.name = 'Update User';
    this.store.dispatch(new fromAction.UpdateUser({ user: user }));
  }

}
