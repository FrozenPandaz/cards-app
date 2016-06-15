import { Injectable } from '@angular/core';

import { isNode } from 'angular2-universal';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { LocalStorage } from '../shared/local-storage/local-storage.service';

@Injectable()
export class GameService {
	game_id: string;
	constructor(private af: AngularFire, private localStorage: LocalStorage) {}

	setGameId(game_id: string) {
		this.game_id = game_id;
	}

	getGame() {
		return this.af.database.object('/games/' + this.game_id).map(game => {
			if (!game) {
				console.log('Game does not exist');
				return;
			}
			game.name = game.name || game.$key;
			return game;
		});
	}

	joinGame(name: string) {
		let new_user: any = {
			name: name,
			score: 0
		};
		let key = this.getUsers().push(new_user).key();
		this.localStorage.setItem(this.game_id, key);
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
