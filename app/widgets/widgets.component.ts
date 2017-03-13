import {Component} from '@angular/core';
import {WidgetsService} from '../common/widgets.service';

@Component({
  selector: 'widgets',
  template: require('./widgets.component.html'),
  styles: [require('./widgets.component.css')],
})

export class WidgetsComponent {
  text: string = 'hello';
  inputVal: string ='';
  isDisabled: boolean = false;
  nums: number[] = [1, 2, 3];
  widgets: any[] = [];

  //defaults to public if private isn't specified
  constructor(WidgetsService: WidgetsService) {
    this.widgets = WidgetsService.widgets;
  }
  handleClick() {
    this.isDisabled = !this.isDisabled;
  }
}