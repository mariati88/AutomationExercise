Cypress.Commands.add('login',(email,password)=>{
    cy.fixture('userData').then((user) => {
    cy.visit('https://automationexercise.com')
    cy.get('.shop-menu > .nav > :nth-child(4)').click() 
    cy.get('[data-qa="login-email"]').type(user.email)
    cy.get('[data-qa="login-password"]').type(user.password)
    cy.get('[data-qa="login-button"]').click()
})
})


