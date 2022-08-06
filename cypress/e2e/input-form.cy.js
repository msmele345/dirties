describe('Input Form', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
        // cy.visit('/'); or with baseUrl set in config.
    })

    it('should focus on input on load', function () {
        cy.focused() //automatically finds the focused element
            .should('have.id', 'pottyType')
            .type("Dirty")
            .should('have.value', "Dirty");

        cy.get('input[name=date-picker]')
            .should('have.id', 'pottyTime');
    });

    it('should find list', function () {
        cy
            .get('.PottyList_potties__UauSW')
            .eq(0) //first item in the list
            .should('contain.text', 'Wet')
    });

    it('should check list length', function () {

        cy
            .get('.PottyList_potties__UauSW')
            .find('li')
            .should('have.length', 4);
        //OR
        // cy.get('.datatable').find('tr').its('length').should('eq', 4)
        // cy.get('.datatable').find('tr').its('length').should('be.gte', 4)
    });



    // it('should accept input', function () {
    //     //only ensures that the test is run in isolation. Cypress runs all unless only is added.
    //     //cy get takes a css class name for a selector
    //     let todoTypedText = 'Buy Milk';
    //     cy.get('.new-todo')
    //         .type(todoTypedText)
    //         .should('have.value', todoTypedText)
    // });
});