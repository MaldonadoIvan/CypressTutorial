describe('Go to different sections', function(){
   beforeEach(function(){
        cy.visit('https://almundo.com.ar/');
        cy.once('uncaught:exception', () => false); // Elimina algunas excepciones que generalmente son producidas por los .click()
    })
   it('Go to Alojamiento sections', function(){ 
        cy.get('[class=item-tab]').first().click(); //Seleccionara el primero de la lista
    })
    it("Go to ... sections", function(){
        cy.get('[class=item-tab]').eq(2).click(); //eq nos buscara el indice con el que queremos interactuar
    })
})