import { Component, OnInit } from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import {CardComponent} from '../card';

@Component({
	moduleId: module.id,
	selector: 'game',
	directives: [CardComponent],
	template: require('./game.component.html'),
	styles: [require('./game.component.scss')]
})
export class GameComponent implements OnInit {
	game: any;
	users: FirebaseListObservable<any[]>;

	constructor(private routeParams: RouteParams, private af: AngularFire) {
	}

	ngOnInit() {
		let game_id = this.routeParams.get('gameId');
		this.af.database.object('/games/' + game_id).map(game => {
			game.name = game.name || game.$key;
			return game;
		}).subscribe(game => {
			this.game = game;
		});

		this.users = <FirebaseListObservable<any[]>> this.af.database
		.list('/games/' + game_id + '/users', {
			query: {
				orderByChild: 'count'
			}
		}).map(users => {
			return users.filter(user => {
				return user.$key !== 'count';
			});
		});
	}

}
