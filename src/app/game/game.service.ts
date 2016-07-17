import { Injectable } from '@angular/core';

import { isNode } from 'angular2-universal';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { LocalStorage } from '../shared/local-storage/local-storage.service';
import { Game } from './game.model';

@Injectable()
export class GameService {
	game_id: string;
	constructor(private af: AngularFire, private localStorage: LocalStorage) {}

	setGameId(game_id: string) {
		this.game_id = game_id;
	}

	getGame() {
		return this.af.database.object('/games/' + this.game_id).map((game: Game) => {
			if (!game) {
				console.log('Game does not exist');
				return;
			}
			game.name = game.name || game.$key;
			return game;
		});
	}

	createGame(name?: string) {
		if (!name) {
			var subs = this.getGames({
				orderByKey: true
			}).map((games: Game[]) => {
				return games.filter((game: Game) => {
					return game.game_id.startsWith('game_');
				});
			}).subscribe((games: Game[]) => {
				subs.unsubscribe();
				var maxNumber = 0;
				games.forEach((game: Game) => {
					let game_number = parseInt(game.game_id.replace('game_', ''));
					maxNumber = game_number > maxNumber ? game_number : maxNumber;
				});
				var new_id = 'game_' + (maxNumber + 1);
				this.getGames().update(new_id, {
					name: new_id,
					created: (new Date()).getTime()
				});
			});
		} else {
			let new_id = name.replace(' ', '-');
			this.getGames().update(new_id, {
				name: name,
				created: (new Date()).getTime()
			});
		}
	}

	getGames(query?: any) {
		return this.af.database.list('/games', {
			query: query
		});
	}

	joinGame(name: string) {
		let new_user: any = {
			name: name,
			score: 0
		};
		this.getUsers().push(new_user).then(value => {
			this.localStorage.setItem(this.game_id, value.key);
		});
	}

	getUsersByScore() {
		return <FirebaseListObservable<any>> this.getUsers({
			orderByChild: 'score'
		}).map(users => {
			return users.filter(user => {
				return user.$key !== 'count';
			});
		});
	}

	getUsers(query?: any) {
		return this.af.database
		.list('/games/' + this.game_id + '/users', {
			query: query
		});
	}

	isInGame() {
		return isNode ? true : !!this.localStorage.getItem(this.game_id);
	}

	getCurrentUser() {
		if (!this.isInGame()) {
			return null;
		}
		return this.getUsers({
			orderByKey: true,
			equalTo: this.localStorage.getItem(this.game_id)
		}).map(users => {
			return users[0];
		});
	}

	getPhase() {
		return this.af.database.object('/games/' + this.game_id + '/phase');
	}

	getCardsPlayed() {
		return this.af.database.list('/games/' + this.game_id + '/cardsPlayed');
	}

}
