describe('formas de encontrar un elemento', function(){
    it('buscar en el buscador', function(){
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action');
        cy.get('[name="keyword"]').type("Golden");
        cy.get('[name="keyword"]').clear(); // Borra lo que esta en el elemento
    })
})