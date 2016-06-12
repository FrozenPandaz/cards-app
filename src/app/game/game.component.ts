import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'game',
	template: require('./game.component.html'),
	styles: [require('./game.component.scss')]
})
export class GameComponent implements OnInit {

	constructor() {}

	ngOnInit() {
	}

}
