import {
	beforeEachProviders,
	it,
	describe,
	expect,
	inject
} from '@angular/core/testing';
import { BrowserLocalStorageBackend } from './browser-local-storage.backend';

describe('LocalStorage Service', () => {
	beforeEachProviders(() => [BrowserLocalStorageBackend]);

	it('should ...',
		inject([BrowserLocalStorageBackend], (service: BrowserLocalStorageBackend) => {
	expect(service).toBeTruthy();
	}));
});
