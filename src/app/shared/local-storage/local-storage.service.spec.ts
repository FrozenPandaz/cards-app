import {
	beforeEachProviders,
	it,
	describe,
	expect,
	inject
} from '@angular/core/testing';
import { LocalStorage } from './local-storage.service';

describe('LocalStorage Service', () => {
	beforeEachProviders(() => [LocalStorage]);

	it('should ...',
		inject([LocalStorage], (service: LocalStorage) => {
	expect(service).toBeTruthy();
	}));
});
