describe('Escribir en busqueda varios strings', function(){
    it('Vamos a escribir y limpiar', function(){
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action');
        /*cy.get('[name="keyword"]').clear();//Borramos de antemano por si habia algo escrito
        cy.get('[name="keyword"]').type('Hola');
        cy.get('[name="keyword"]').clear();
        cy.get('[name="keyword"]').type('Que tal');
        */

        //El codigo anterior lo encadenamos y lo reducimos a la siguiente linea
        cy.get('[name="keyword"]').clear().type('Hola').clear().type('Que tal');


    });
})