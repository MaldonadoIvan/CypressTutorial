describe("Pruebas de checkboxes", function(){
    this.beforeEach(function(){
        cy.visit("https://henry.silva.llc/checkboxes-inspector-chrome/");
        cy.once('uncaught:exception', () => false); // Elimina algunas excepciones que generalmente son producidas por los .click()
    })

    it("Seleccionar checkboxes", function(){
        cy.get('.entry-content > :nth-child(4)').check();
        cy.get('.entry-content > :nth-child(7)').check();
        /*
        Aca valido cosas
        */
        cy.get('.entry-content > :nth-child(7)').uncheck();
        cy.get('.entry-content > :nth-child(4)').uncheck();
    })

})