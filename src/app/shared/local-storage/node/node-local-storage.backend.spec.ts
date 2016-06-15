import {
	beforeEachProviders,
	it,
	describe,
	expect,
	inject
} from '@angular/core/testing';
import { NodeLocalStorageBackend } from './node-local-storage.backend';

describe('LocalStorage Service', () => {
	beforeEachProviders(() => [NodeLocalStorageBackend]);

	it('should ...',
		inject([NodeLocalStorageBackend], (service: NodeLocalStorageBackend) => {
	expect(service).toBeTruthy();
	}));
});
