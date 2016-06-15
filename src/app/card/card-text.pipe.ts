import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'cardText'
})
export class CardText implements PipeTransform {

	transform(value: any, args?: any): any {
		if (!value) {
			return '';
		}
		return value.replace(/_/g, '______');
	}

}
