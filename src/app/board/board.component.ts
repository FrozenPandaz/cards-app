import { Component, Input, OnInit } from '@angular/core';

import {CardComponent} from '../card';

@Component({
	moduleId: module.id,
	selector: 'board',
	directives: [CardComponent],
	template: require('./board.component.html'),
	styles: [require('./board.component.scss')]
})

export class BoardComponent implements OnInit {
	@Input()
	cards: any[];

	constructor() {}

	ngOnInit() {
		console.log(this.cards);
	}

}
