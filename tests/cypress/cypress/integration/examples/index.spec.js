/// <reference types="cypress" />

// test index page with example content
context('Index Page Examples', () => {
	beforeEach(() => {
		cy.visit('/index');
	});

	describe('Querying first example', () => {
		it('has DOM element with content "Example Module"', () => {
			cy.get('.m-example:first').should('contain', 'Example Module');
		});

		it('cy.contains() - query DOM elements with matching content', () => {
			cy.get('.m-example:first').contains('Example Module').should('have.class', 'm-example__headline');

			cy.get('.m-example:first').contains('Link 2').should('have.class', 'm-example__link');

			cy.get('.m-example:first').contains('ul', 'Link 4').should('have.class', 'js-m-example__list');
		});

		it('.within() - query DOM elements within a specific element', () => {
			cy.get('.m-example:first').within(() => {
				cy.get('li:first a').should('have.attr', 'href', 'index');
				cy.get('li:last a').should('have.attr', 'href', 'index');
			});
		});
	});

	describe('Querying more examples', () => {
		it('cy.get() - query DOM element', () => {
			cy.get('.m-example:eq(1)').should('contain', 'Example Module with Modifier Blue');
		});

		it('cy.contains() - query DOM elements with matching content', () => {
			cy.get('.m-example:eq(1)').contains('Example Module').should('have.class', 'm-example__headline');

			cy.get('.m-example:eq(1)').contains('Link One').should('have.class', 'm-example__link');
		});
	});

	describe('Navigation', () => {
		it('click on "more examples" and go back', () => {
			cy.get('.a-box').contains('more examples').click();

			cy.location('pathname').should('include', 'example-patterns');
			cy.url().should('eq', `${Cypress.config().baseUrl}/example-patterns`);

			cy.go('back');
			cy.location('pathname').should('not.include', 'example-patterns');
			cy.location('pathname').should('include', 'index');
		});
	});
});
