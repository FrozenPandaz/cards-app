import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'home',
	template: require('./home.component.html'),
	styles: [require('./home.component.scss')]
})
export class HomeComponent implements OnInit {

	constructor() {}

	ngOnInit() {
	}

}
