import 'angular2-universal/polyfills';

import {
	bootstrap,
	enableProdMode,
	BROWSER_ROUTER_PROVIDERS,
	BROWSER_HTTP_PROVIDERS
} from 'angular2-universal';

import 'rxjs';

import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2';
import {App} from './app/app.component';

enableProdMode();

// use `bootstrap` or `prebootComplete` callback from universal repo
// to ensure preboot completes after bootstraps
bootstrap(App, [
	...BROWSER_ROUTER_PROVIDERS,
	...BROWSER_HTTP_PROVIDERS,
	FIREBASE_PROVIDERS,
	defaultFirebase('https://card-app.firebaseio.com')
]);
