import { Injectable } from '@angular/core';

import {Observable, Subscriber} from 'rxjs';

@Injectable()
export class SidebarService {

	open: boolean = false;

	subscribers: Subscriber<boolean>[] = [];

	open_observable = <Observable<boolean>> new Observable(subscriber => {
		this.subscribers.push(subscriber);
		subscriber.next(this.open);
	});

	toggleSidebar() {
		this.open = !this.open;
		if (!this.subscribers[0]) {
			return;
		}
		this.subscribers.forEach(subscriber => {
			subscriber.next(this.open);
		});
	}

	getSidebarState() {
		return this.open_observable;
	}

	constructor() {}

}
