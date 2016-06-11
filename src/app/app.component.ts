import {Component, Directive, ElementRef, Renderer} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Http} from '@angular/http';

@Component({
  selector: 'home',
  template: `
    <div>This is the "Home" page</div>
  `
})
export class Home { }

@Component({
	selector: 'app', // <app></app>
	directives: [
		...ROUTER_DIRECTIVES
	],
	styles: [`
	`],
	template: `
	<h3>Cards against Humility</h3>
	`
})
@RouteConfig([
{ path: '/', component: Home, name: 'Home', useAsDefault: true },
{ path: '/**', redirectTo: ['Home'] }
])
export class App {

ngOnInit() {
}

}
