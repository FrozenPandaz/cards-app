import { Component, Input, OnInit } from '@angular/core';

import {CardText} from './card-text.pipe';

@Component({
	moduleId: module.id,
	selector: 'card',
	pipes: [CardText],
	template: require('./card.component.html'),
	styles: [require('./card.component.scss')]
})
export class CardComponent implements OnInit {
	@Input()
	card: any;

	constructor() {}

	ngOnInit() {
		console.log(this.card);
	}

}
