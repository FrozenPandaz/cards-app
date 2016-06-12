import {
	beforeEach,
	beforeEachProviders,
	describe,
	expect,
	it,
	inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { App } from './app.component';

describe('Component: App', () => {
	let builder: TestComponentBuilder;

	beforeEachProviders(() => [App]);
	beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
		builder = tcb;
	}));

	it('should inject the component', inject([App],
		(component: App) => {
			expect(component).toBeTruthy();
		}));

		it('should create the component', inject([], () => {
			return builder.createAsync(AppComponentTestController)
			.then((fixture: ComponentFixture<any>) => {
				let query = fixture.debugElement.query(By.directive(App));
				expect(query).toBeTruthy();
				expect(query.componentInstance).toBeTruthy();
			});
		}));
	});

	@Component({
		selector: 'test',
		template: `
		<app></app>
		`,
		directives: [App]
	})
	class AppComponentTestController {
	}
