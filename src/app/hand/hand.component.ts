import { Component, Input, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'hand',
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
