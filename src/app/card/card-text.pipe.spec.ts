import {
	it,
	describe,
	expect,
	inject,
	beforeEachProviders
} from '@angular/core/testing';
import { CardText } from './card-text.pipe';

describe('CardText Pipe', () => {
	beforeEachProviders(() => [CardText]);

	it('should transform the input', inject([CardText], (pipe: CardText) => {
		expect(pipe.transform(true)).toBe(null);
	}));
});
