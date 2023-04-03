class indexPage{
    //Utilizando fixtures al constructor lo conviernto en un json, tal como aparece en index.json
    /*constructor(){
       this.searchInput = '[size="14"]';
       this.searchButton = '[name="searchProducts"]';

    }*/

    search = (element) => {
        //Al utilizar fixtures adhiero la siguiente linea con los locators dentro
        cy.fixture('index.json').then((locators)=>{
            cy.get(locators.searchInput).type(element);
            cy.get(locators.searchButton).click();
        })
        

    }
}

export default new indexPage();
