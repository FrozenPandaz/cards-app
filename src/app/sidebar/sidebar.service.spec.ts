import {
	beforeEachProviders,
	it,
	describe,
	expect,
	inject
} from '@angular/core/testing';
import { SidebarService } from './sidebar.service';

describe('Sidebar Service', () => {
	beforeEachProviders(() => [SidebarService]);

	it('should ...',
	inject([SidebarService], (service: SidebarService) => {
		expect(service).toBeTruthy();
	}));
});
