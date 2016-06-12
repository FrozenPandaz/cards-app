import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
	moduleId: module.id,
	selector: 'sidebar',
	template: require('./sidebar.component.html'),
	styles: [require('./sidebar.component.scss')]
})
export class SidebarComponent implements OnInit {

	games: FirebaseListObservable<any[]>;

	constructor(private angularfire: AngularFire) {}

	ngOnInit() {
		this.games = <FirebaseListObservable<any[]>> this.angularfire.database.list('/games', {
			query: {
				orderByChild: 'created',
				limitToLast: 10
			}
		})
		.map(games => {
			return games.reverse();
		});
	}

}
