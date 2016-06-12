import { Component, OnInit } from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';


@Component({
	moduleId: module.id,
	selector: 'game',
	template: require('./game.component.html'),
	styles: [require('./game.component.scss')]
})
export class GameComponent implements OnInit {
	game_id: string;

	constructor(private routeParams: RouteParams) {
		this.game_id = this.routeParams.get('gameId');
	}

	ngOnInit() {

	}

}
