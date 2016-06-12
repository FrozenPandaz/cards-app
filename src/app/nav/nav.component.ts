import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'nav',
	template: require('./nav.component.html'),
	styles: [require('./nav.component.scss')]
})
export class NavComponent implements OnInit {

	constructor() {}

	ngOnInit() {
	}

}
