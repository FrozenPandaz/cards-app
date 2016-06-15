import { Injectable } from '@angular/core';

import { LocalStorageBackend } from '../local-storage.service';

@Injectable()
export class NodeLocalStorageBackend implements LocalStorageBackend {

	localStorage = {};

	constructor() {}

	setItem(key: string, value: string): void {
		this.localStorage[key] = value;
	}

	getItem(key: string): string {
		return this.localStorage[key];
	}

}
