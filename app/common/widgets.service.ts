import {Injectable} from '@angular/core';
import {PricingService} from './pricing.service';

@Injectable()
export class WidgetsService {
  widgets = [
  {name: 'Widget 01', price: 100},
  {name: 'Widget 02', price: 200},
  {name: 'Widget 03', price: 300},
  {name: 'Widget 04', price: 400},
  {name: 'Widget 05', price: 500},
  ];

  constructor(PricingService: PricingService) {
    this.widgets.map(widget => {
      widget.price = PricingService.halfPrice(widget.price);
      return widget;
    });
  }
}