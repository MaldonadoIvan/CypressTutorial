describe('Login', ()=>{
    beforeEach(()=>{
        cy.visit('https://d3fb0brp4nfybz.cloudfront.net/')
    })
    it('Login with incorrect email', ()=>{
        cy.login('something@gmail.com', 'other')
        cy.fixture('login').then((login)=>{
            cy.origin('https://idpsesionu.telecom.com.ar', { args: { login} }, ({login}) => {
                cy.get(login.incorrectLoginBanner).should('contain','Los datos ingresados son incorrectos.')
            })
        })
    })
})