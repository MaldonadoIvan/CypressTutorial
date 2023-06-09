Cypress.Commands.add('login', (mail, pass)=>{
    cy.fixture('login').then((login)=>{
        cy.get('.fa').click()
        cy.get(login.menuMiCuenta).click()
        cy.get(login.loginLink).click()
    }),
    cy.origin('https://idpsesionu.telecom.com.ar', { args: { mail, pass } }, ({ mail, pass }) => {
        cy.fixture('login').then((login)=>{
            cy.wait(1500)
            cy.get(login.email).type(mail)
            cy.get(login.password).type(pass)
            cy.get(login.loginButton).click()
        })
    })
})