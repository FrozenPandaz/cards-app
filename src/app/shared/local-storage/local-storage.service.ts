import { Injectable } from '@angular/core';

export abstract class LocalStorageBackend {
	abstract getItem(key: string);
	abstract setItem(key: string, value: string);
}

@Injectable()
export class LocalStorage {

	constructor(private backend: LocalStorageBackend) {}

	setItem(key: string, value: string) {
		return this.backend.setItem(key, value);
	}

	getItem(key: string) {
		return this.backend.getItem(key);
	}

}
