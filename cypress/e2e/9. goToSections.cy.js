describe('Go to different sections', function(){
    it('Go to Alojamiento sections', function(){
        cy.visit('https://almundo.com.ar/');
        cy.get('[class=item-tab]').first().click(); //Seleccionara el primero de la lista
    })
})