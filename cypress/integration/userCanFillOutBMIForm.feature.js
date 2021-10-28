describe('User fills out the BMI form', () => {
    
    describe('with all necessary information', () => {  //testing happy path
    
        before(() => {
            cy.visit('/');
            cy.get('input[name=fullName]').type('Giovanni Iacoletti');
            cy.get('input[name=height]').type('174');
            cy.get('input[name=weight]').type('67');
            cy.get('input[id=submit-button]').click();
        });

        it('is expected to see the BMI calculated on screen', () => {
            cy.get('div[id=response-message]').should('contain.text', "Giovanni Iacoletti BMI is");
        });
    
    });

    describe('with full name field missing', () => {

        before(() => {
            cy.visit('/');
            cy.get('input[name=height]').type('174');
            cy.get('input[name=weight]').type('67');
            cy.get('input[id=submit-button]').click();
        });

        it('is expected to see an error message', () => {
            cy.get('div[id=response-message]').should('contain.text', 'Enter a full name, please!');
        });
    
    });

});