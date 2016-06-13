import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { CardService } from './card.service';

describe('Card Service', () => {
  beforeEachProviders(() => [CardService]);

  it('should ...',
      inject([CardService], (service: CardService) => {
    expect(service).toBeTruthy();
  }));
});
