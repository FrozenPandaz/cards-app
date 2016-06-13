import { Injectable } from '@angular/core';

import {AngularFire } from 'angularfire2';
@Injectable()
export class CardService {

	constructor(private af: AngularFire) {}

	getCardById(id: string, type?: string) {
		type = type || 'white';
		return this.af.database.object('/' + ['cards', type, id].join('/'));
	}

}
