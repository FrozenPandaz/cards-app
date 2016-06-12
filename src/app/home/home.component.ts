import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Component({
	moduleId: module.id,
	selector: 'home',
	template: require('./home.component.html'),
	styles: [require('./home.component.scss')]
})
export class HomeComponent implements OnInit {

	games: FirebaseListObservable<any>;

	constructor(private angularfire: AngularFire) {}

	ngOnInit() {
		this.games = this.angularfire.database.list('/games');
	}

}
