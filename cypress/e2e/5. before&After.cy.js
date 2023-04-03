describe('Escribir en busqueda varios strings', function(){
    before(function(){
        cy.log("Ejecutando precondiciones a las pruebas");
    })
    after(function(){
        cy.log("Ejecutando todas las postcondiciones a las pruebas");
    })

    it('Vamos a escribir y limpiar', function(){
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action');
        cy.get('[name="keyword"]').clear().type('Hola').clear().type('Que tal');


    });
})