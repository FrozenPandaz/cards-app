import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {FIREBASE_PROVIDERS} from 'angularfire2';

import {NavComponent} from './nav';
import {HomeComponent} from './home';
import {SidebarComponent} from './sidebar';
@Component({
	selector: 'app', // <app></app>
	directives: [
		...ROUTER_DIRECTIVES,
		NavComponent,
		SidebarComponent
	],
	providers: [
		FIREBASE_PROVIDERS
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
	{ path: '/**', redirectTo: ['Home'] }
])
export class App {

	ngOnInit() {
	}

}
