import { Injectable } from '@angular/core';

import { LocalStorageBackend } from '../local-storage.service';

@Injectable()
export class BrowserLocalStorageBackend implements LocalStorageBackend {

	localStorage: Storage = window['localStorage'];

	constructor() {}

	setItem(key: string, value: string) {
		console.log(key, value);
		return this.localStorage.setItem(key, value);
	}

	getItem(key: string) {
		return this.localStorage.getItem(key);
	}

}
