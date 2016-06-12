import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
	moduleId: module.id,
	selector: 'sidebar',
	directives: [RouterLink],
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
				limitToLast: 25
			}
		})
		.map(games => {
			return games.reverse();
		});
	}

}
