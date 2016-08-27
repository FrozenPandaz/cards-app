import { Component, Input, OnInit } from '@angular/core';

import { CardComponent } from '../card/card.component';

@Component({
	moduleId: module.id,
	selector: 'hand',
	directives: [
		CardComponent
	],
	template: require('./hand.component.html'),
	styles: [require('./hand.component.scss')]
})
export class HandComponent implements OnInit {

	@Input()
	cards: any[];

	constructor() {}

	ngOnInit() {

	}
}
