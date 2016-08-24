import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {Observable} from 'rxjs/Observable';

import {NavComponent} from './nav';
import {HomeComponent} from './home';
import {SidebarComponent, SidebarService} from './sidebar';
import {GameComponent} from './game';
import {GameService} from './game/game.service';
import {CardService} from './card';

@Component({
	selector: 'app', // <app></app>
	directives: [
		...ROUTER_DIRECTIVES,
		NavComponent,
		SidebarComponent
	],
	providers: [
		SidebarService,
		CardService,
		GameService
	],
	encapsulation: ViewEncapsulation.None,
	styles: [
		require('./app.component.scss'),
		require('../../node_modules/materialize-css/sass/materialize.scss')
	],
	template: require('./app.component.html')
})
@RouteConfig([
	{ path: '/', component: HomeComponent, name: 'Home', useAsDefault: true },
	{ path: '/:gameId', component: GameComponent, name: 'Game'},
	{ path: '/**', redirectTo: ['Home'] }
])
export class App {
	constructor(private sidebarService: SidebarService) {}

	sidebar_expanded: Observable<boolean>;

	ngOnInit() {
		this.sidebar_expanded = this.sidebarService.getSidebarState();
	}

}
