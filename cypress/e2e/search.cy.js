describe('Search elements', ()=>{
    beforeEach(()=>{ //Antes de ejecutar cada prueba realizara la accion que contenga dentro
        cy.visit(Cypress.config().baseUrl); // Utilizo Cypress.config().baseUrl porque se definio previamente en cypress.config.js el sitio base a donde quiero ir
    })
    it('search for elements with multiple results', ()=>{
        cy.search('Golden') // Este metodo fue creado en support/commands.js para limpiar codigo
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.title).should('contain','Golden');
        })
    })
    it('search for elements with no results', ()=>{
        cy.search('Border collie')
    })
})