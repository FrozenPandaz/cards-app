// Angular 2 Universal
import {
	REQUEST_URL,
	ORIGIN_URL,
	BASE_URL,
	NODE_ROUTER_PROVIDERS,
	NODE_HTTP_PROVIDERS,
	ExpressEngineConfig
} from 'angular2-universal';
import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2';

import 'rxjs';

// Application
import {App} from './app/app.component';
import {NODE_LOCALSTORAGE_PROVIDERS} from './app/shared/local-storage';

export function ngApp(req, res) {
	let baseUrl = '/';
	let url = req.originalUrl || '/';

	let config: ExpressEngineConfig = {
	directives: [
		App
	],
	platformProviders: [
		{provide: ORIGIN_URL, useValue: 'http://localhost:3000'},
		{provide: BASE_URL, useValue: baseUrl},
	],
	providers: [
		{provide: REQUEST_URL, useValue: url},
		NODE_ROUTER_PROVIDERS,
		NODE_HTTP_PROVIDERS,
		FIREBASE_PROVIDERS,
		defaultFirebase('https://card-app.firebaseio.com'),
		NODE_LOCALSTORAGE_PROVIDERS
	],
		async: true,
		preboot: false // { appRoot: 'app' } // your top level app component selector
	};

	res.render('index', config);
}
