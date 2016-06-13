import { Component, Input, OnInit } from '@angular/core';

import {CardText} from './card-text.pipe';
import {CardService} from './card.service';
@Component({
	moduleId: module.id,
	selector: 'card',
	pipes: [CardText],
	template: require('./card.component.html'),
	styles: [require('./card.component.scss')]
})
export class CardComponent implements OnInit {
	@Input()
	card: any;

	constructor(private cardService: CardService) {}

	ngOnInit() {
		if (!this.card.text && this.card.card_id) {
			this.cardService.getCardById(this.card.card_id).subscribe(card => {
				this.card = card;
			});
		}
	}

}
