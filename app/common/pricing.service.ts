import {Injectable} from '@angular/core';

@Injectable()
export class PricingService {
  halfPrice(price) {
    return price * 0.5;
  }
}