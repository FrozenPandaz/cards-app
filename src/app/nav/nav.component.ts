import { Component, OnInit } from '@angular/core';

import { SidebarService } from '../sidebar';

@Component({
	moduleId: module.id,
	selector: 'nav',
	template: require('./nav.component.html'),
	styles: [require('./nav.component.scss')]
})
export class NavComponent implements OnInit {

	constructor(private sidebarService: SidebarService) {}

	toggleSidebar() {
		this.sidebarService.toggleSidebar();
	}

	ngOnInit() {
	}

}
