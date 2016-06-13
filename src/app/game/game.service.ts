import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class GameService {
	game_id: string;
	constructor(private af: AngularFire) {}

	setGameId(game_id: string) {
		this.game_id = game_id;
	}

	getGame() {
		return this.af.database.object('/games/' + this.game_id).map(game => {
			game.name = game.name || game.$key;
			return game;
		});
	}

	getUsers() {
		return <FirebaseListObservable<any>> this.af.database
		.list('/games/' + this.game_id + '/users', {
			query: {
				orderByChild: 'count'
			}
		}).map(users => {
			return users.filter(user => {
				return user.$key !== 'count';
			});
		});
	}

	getPhase() {
		return this.af.database.object('/games/' + this.game_id + '/phase');
	}

	getCardsPlayed() {
		return this.af.database.list('/games/' + this.game_id + '/cardsPlayed');
	}

}
