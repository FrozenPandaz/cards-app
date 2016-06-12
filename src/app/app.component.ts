import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {HeaderComponent} from './header';
import {HomeComponent} from './home';

@Component({
	selector: 'app', // <app></app>
	directives: [
		...ROUTER_DIRECTIVES,
		HeaderComponent
	],
	encapsulation: ViewEncapsulation.None,
	styles: [require('./app.component.scss')],
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
