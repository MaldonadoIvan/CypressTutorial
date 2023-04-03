describe("Seleccionar dropdowns", function(){
    beforeEach(function(){
        cy.visit('https://almundo.com.ar/');
        cy.once('uncaught:exception', () => false); // Elimina algunas excepciones que generalmente son producidas por los .click()
    })

    it("Seleccionar clase de vuelo: Economica", function(){
        cy.get('#classes').select('Económica');

    })

    it("Seleccionar clase de vuelo: Premium", function(){
        cy.get('#classes').select('Premium');
 

           })
})