import indexPage from '../support/pages/index';
import articlesPage from '../support/pages/articles'


describe('Search test cases', function(){ // Agrupamos las pruebas
    it('Search with results', function(){ //Nuestro caso de prueba
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action');
        /*cy.get('[size="14"]').type('golden')
        cy.get('[name="searchProducts"]').click();
        */
        indexPage.search('golden'); //el codigo de arriba es reemplazado por el metodo de la clase indexPage
       //cy.get('tbody > :nth-child(2) > :nth-child(3)').contains('Golden Retriever');
        articlesPage.verifyArticle('Golden Retriever');//se reemplaza el codigo de arriba por la clase articlesPagenot
    })
})