import indexPage from '../support/pages/index';
import articlesPage from '../support/pages/articles'
/// < reference types="cypress" />ifram 

describe('Search test cases', function(){ // Agrupamos las pruebas
    it('Search with results', function(){ //Nuestro caso de prueba
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action');
    
        indexPage.search('golden'); 
        cy.logSpecFormat('Searching for dogs'); // Se creo en commands.js este comando
        articlesPage.verifyArticle('Golden Retriever');        
    })
})