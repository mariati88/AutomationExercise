cypress.commands.add('login',(email,password)=>{
    cy.fixture('userData').then((user) => {
    cy.visit('https://automationexercise.com')
    cy.get('.shop-menu > .nav > :nth-child(4)').click() 
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(password)
    cy.get('[data-qa="login-button"]').click()
})
})