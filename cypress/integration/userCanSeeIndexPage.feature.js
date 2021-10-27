describe('User that navigates to the index page', () => {
    
    before(() => {
        cy.visit('/');
    });

    it('is expected to see ', () => {
        cy.get('h1').should('contain.text', 'BMI Calculator');
        cy.get('label[id=fullNameLabel]').should('be.visible').should('contain.text', 'Full Name:');
        cy.get('input[id=fullName]').should('be.visible');
        cy.get('label[id=heightLabel]').should('be.visible').should('contain.text', 'Height:');
        cy.get('input[id=height]').should('be.visible');
        cy.get('label[id=weightLabel]').should('be.visible').should('contain.text', 'Weight:');
        cy.get('input[id=weight]').should('be.visible');
        cy.get('input[id=submit-button]').should('be.visible').should('have.value', 'Calculate');
    });

});