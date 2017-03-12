import {Component} from '@angular/core';

@Component({
  selector: 'widgets',
  template: require('./widgets.component.html'),
  styles: [require('./widgets.component.css')],
})

export class WidgetsComponent {
  text: string = 'hello';
  isDisabled: boolean = false;
  nums = [1, 2, 3];

  handleClick() {
    this.isDisabled = !this.isDisabled;
  }
}