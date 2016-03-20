import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterOutlet} from 'angular2/router';
import {bootstrap} from 'angular2/platform/browser';
import {Home, Creator} from './home/home.component';
import {Viewer} from './viewer/viewer.component';

@Component({
	selector: 'app',
	templateUrl: 'app/app.html',
	directives: [...ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS],
	styles: [`
		paper-drawer-panel {
			--paper-drawer-panel-drawer-container: {
				background-color: beige;
			};
			--paper-drawer-panel-main-container: {
				overflow-y: auto;
			}
		}
		paper-input {
			--paper-input-container-color: grey;
			--paper-input-container-input-color: white;
			position: absolute;
			right: 20px;
			width: 20em;
		}
		paper-icon-button {
			display: none;
		}

		@media (max-width:600px) {
			h1 {
				font-size: .85em;
			}
			paper-icon-button {
				display: inherit;
			}
		}
	`]
})

@RouteConfig([
	{
		path: '/card-viewer/',
		name: 'Viewer',
		component: Viewer
	},
	{
		path: '/creator',
		name: 'Creator',
		component: Creator
	},
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	// {
	// 	path: '/:game_id',
	// 	name: 'Game',
	// 	component: Game
	// },
	// 	path: '/**',
	// 	redirectTo: ['Home']
	// }
])
export class App {
}

bootstrap(App);