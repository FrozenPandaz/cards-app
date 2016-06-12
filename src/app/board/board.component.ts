import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'board',
	template: require('./board.component.html'),
	styles: [require('./board.component.scss')]
})

export class BoardComponent implements OnInit {
	constructor() {}

	ngOnInit() {
	}

}
