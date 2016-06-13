import { Component, OnInit } from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
import {FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

import {BoardComponent} from '../board';
import {CardComponent} from '../card';
import {HandComponent} from '../hand';
import {GameService} from './game.service';

@Component({
	moduleId: module.id,
	selector: 'game',
	providers: [GameService],
	directives: [CardComponent, HandComponent, BoardComponent],
	template: require('./game.component.html'),
	styles: [require('./game.component.scss')]
})
export class GameComponent implements OnInit {
	game: any;
	users: FirebaseListObservable<any>;
	cards_played: FirebaseListObservable<any>;
	game_phase: FirebaseObjectObservable<any>;

	constructor(
		private routeParams: RouteParams,
		private gameService: GameService
	) {}

	ngOnInit() {
		this.gameService.setGameId(this.routeParams.get('gameId'));
		this.gameService.getGame().subscribe(game => {
			this.game = game;
		});

		this.users = this.gameService.getUsers();

		this.game_phase = this.gameService.getPhase();

		this.cards_played = this.gameService.getCardsPlayed();
	}

}
