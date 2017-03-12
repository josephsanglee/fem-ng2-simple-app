import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';
import {Users} from '../users/users.component';
import {WidgetsComponent} from '../widgets/widgets.component';

@Component({
  selector: 'home',
  template: require('./home.component.html'),
  directives: [Users, WidgetsComponent],
})
export class HomeComponent implements OnInit {
  title: string = 'Home Page';
  body:  string = 'This is the about home body';
  message: string;

  constructor(private _stateService: StateService) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
