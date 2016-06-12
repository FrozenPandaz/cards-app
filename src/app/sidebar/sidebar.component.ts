import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated';

import { AngularFire, FirebaseListObservable} from 'angularfire2';

import { SidebarService } from './sidebar.service';

@Component({
	moduleId: module.id,
	selector: 'sidebar',
	directives: [RouterLink],
	template: require('./sidebar.component.html'),
	styles: [require('./sidebar.component.scss')]
})
export class SidebarComponent implements OnInit {

	games: FirebaseListObservable<any[]>;

	constructor(private angularfire: AngularFire, private sidebarService: SidebarService) {}

	onClick() {
		this.sidebarService.toggleSidebar();
	}

	ngOnInit() {
		var subs = this.sidebarService.getSidebarState().filter(state => {
			return state;
		}).subscribe(() => {
			this.games = <FirebaseListObservable<any[]>> this.angularfire.database.list('/games', {
				query: {
					orderByChild: 'created',
					limitToLast: 25
				}
			})
			.map(games => {
				return games.reverse();
			});
			subs.unsubscribe();
		});
	}

}
