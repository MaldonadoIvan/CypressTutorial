describe('Search elements', ()=>{
    beforeEach(()=>{ //Antes de ejecutar cada prueba realizara la accion que contenga dentro
        cy.visit(Cypress.config().baseUrl); // Utilizo Cypress.config().baseUrl porque se definio previamente en cypress.config.js el sitio base a donde quiero ir
    })
    it('search for elements with multiple results', ()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('Golden')
            cy.get(index.searchButton).click()
        })
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.title).should('contain','Golden');
        })
    })
    it('search for elements with no results', ()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('Border collie')
            cy.get(index.searchButton).click()
        })
    })
})
