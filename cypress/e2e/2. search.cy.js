describe('Search test cases', function(){ // Agrupamos las pruebas
    it('Search with results', function(){ //Nuestro caso de prueba
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action');
        cy.get('[size="14"]').type('golden')
        cy.get('[name="searchProducts"]').click();
        cy.get('tbody > :nth-child(2) > :nth-child(3)').contains('Golden Retriever');
    })
})