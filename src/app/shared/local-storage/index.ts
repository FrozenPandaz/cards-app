import {provide} from '@angular/core';

import {BrowserLocalStorageBackend} from './browser/browser-local-storage.backend';
import {NodeLocalStorageBackend} from './node/node-local-storage.backend';
import {LocalStorageBackend, LocalStorage} from './local-storage.service';

export const NODE_LOCALSTORAGE_PROVIDERS = [
	NodeLocalStorageBackend,
	provide(LocalStorageBackend, {useClass: NodeLocalStorageBackend}),
	LocalStorage
];

export const BROWSER_LOCALSTORAGE_PROVIDERS = [
	BrowserLocalStorageBackend,
	provide(LocalStorageBackend, {useClass: BrowserLocalStorageBackend}),
	LocalStorage
];
