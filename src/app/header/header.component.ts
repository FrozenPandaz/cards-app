import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'header',
	template: require('./header.component.html'),
	styles: [require('./header.component.scss')]
})
export class HeaderComponent implements OnInit {

	constructor() {}

	ngOnInit() {
	}

}
