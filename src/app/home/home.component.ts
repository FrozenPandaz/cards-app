import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { GameService } from '../game';

@Component({
	moduleId: module.id,
	selector: 'home',
	template: require('./home.component.html'),
	styles: [require('./home.component.scss')]
})
export class HomeComponent implements OnInit {

	name: string;

	constructor(private router: Router, private gameService: GameService) {}

	onSubmit(e) {
		e.preventDefault();
		this.gameService.createGame(this.name);
		this.router.navigate(['Game', {gameId: this.name.replace(' ', '-')}]);
	}

	ngOnInit() {
	}

}
