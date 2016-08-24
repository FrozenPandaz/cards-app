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
	name: string;
	modal_visible: boolean = false;
	users: FirebaseListObservable<any>;
	cards_played: FirebaseListObservable<any>;
	game_phase: FirebaseObjectObservable<any>;

	constructor(
		private routeParams: RouteParams,
		private gameService: GameService
	) {}

	showModal() {
		this.modal_visible = true;
	}

	hideModal() {
		this.modal_visible = false;
	}

	onSubmit(e) {
		e.preventDefault();
		this.hideModal();
		this.gameService.joinGame(this.name);
	}

	ngOnInit() {
		this.gameService.setGameId(this.routeParams.get('gameId'));
		if (!this.gameService.isInGame()) {
			this.showModal();
		}
		this.gameService.getGame().subscribe(game => {
			this.game = game;
		});

		this.users = this.gameService.getUsersByScore();

		this.game_phase = this.gameService.getPhase();

		this.cards_played = this.gameService.getCardsPlayed();
	}

}
