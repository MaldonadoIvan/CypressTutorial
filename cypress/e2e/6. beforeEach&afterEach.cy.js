describe('Escribir en busqueda varios strings', function(){
    before(function(){
        cy.log("Ejecutando precondiciones a las pruebas");
    })
    after(function(){
        cy.log("Ejecutando todas las postcondiciones a las pruebas");
    })

    this.beforeEach(function(){
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action');
    });
    this.afterEach(function(){
        cy.log("Poniendo datos en su estado original");
    });

    it('Vamos a escribir y limpiar 1', function(){
        cy.get('[name="keyword"]').clear().type('Hola').clear().type('Que tal');
    });

    it('Vamos a escribir y limpiar 2', function(){
        cy.get('[name="keyword"]').clear().type('Hello').clear().type('How are you?');
    });
})