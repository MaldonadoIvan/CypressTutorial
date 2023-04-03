class articlesPage{
    /*
    constructor(){
        this.banner = 'tbody > :nth-child(2) > :nth-child(3)';
    
    }
    */

    verifyArticle = (article) =>{
        cy.fixture('articles.json').then((locators)=>{
        cy.get(locators.banner).contains(article);
        })
    }
}

export default new articlesPage(); 