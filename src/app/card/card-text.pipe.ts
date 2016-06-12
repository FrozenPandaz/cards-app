import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'cardText'
})
export class CardText implements PipeTransform {

	transform(value: string, args?: any): string {
		if (!value) {
			return value;
		}
		return value.replace(/_/g, '______');
	}

}
